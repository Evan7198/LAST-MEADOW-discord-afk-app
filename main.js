const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// ========== 便携模式：所有缓存/数据存到 exe 同级目录 ==========
// portable 模式下 exe 解压到临时目录，真实 exe 位置在 PORTABLE_EXECUTABLE_DIR
// PORTABLE_EXECUTABLE_FILE 是 exe 完整路径，DIR 是其所在目录
const portableDir = process.env.PORTABLE_EXECUTABLE_DIR
  || (app.isPackaged ? path.dirname(process.execPath) : __dirname);
const userDataPath = path.join(portableDir, 'AppData');
app.setPath('userData', userDataPath);
app.setPath('cache', path.join(userDataPath, 'Cache'));
app.setPath('temp', path.join(userDataPath, 'Temp'));
app.setPath('logs', path.join(userDataPath, 'Logs'));

let mainWindow;
let discordView;

// Discord 网页版地址
const DISCORD_URL = 'https://discord.com/channels/@me';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: 'Particle Discord BOT',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  mainWindow.setMenuBarVisibility(false);

  // 加载控制面板
  mainWindow.loadFile(path.join(__dirname, 'src/index.html'));

  // 创建内嵌的 Discord 浏览器视图
  discordView = new BrowserView({
    webPreferences: {
      preload: path.join(__dirname, 'preload-discord.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.setBrowserView(discordView);
  updateDiscordViewBounds();
  discordView.webContents.loadURL(DISCORD_URL);

  // 打开 Discord 视图的 DevTools（开发时方便调试选择器）
  if (process.argv.includes('--dev')) {
    discordView.webContents.openDevTools({ mode: 'detach' });
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.on('resize', updateDiscordViewBounds);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function updateDiscordViewBounds() {
  if (!mainWindow || !discordView) return;
  const { width, height } = mainWindow.getContentBounds();
  const panelWidth = 320; // 左侧控制面板宽度
  discordView.setBounds({
    x: panelWidth,
    y: 0,
    width: width - panelWidth,
    height: height,
  });
}

// ========== IPC 通信：控制面板 <-> Discord 页面 ==========

// 在 Discord 页面中执行 JS（核心自动化能力）
ipcMain.handle('execute-in-discord', async (_event, code) => {
  if (!discordView) return null;
  try {
    return await discordView.webContents.executeJavaScript(code);
  } catch (err) {
    console.error('Execute in Discord failed:', err.message);
    return { error: err.message };
  }
});

// 在 Discord 页面中模拟点击指定坐标
ipcMain.handle('click-in-discord', async (_event, x, y) => {
  if (!discordView) return;
  discordView.webContents.sendInputEvent({ type: 'mouseDown', x, y, button: 'left', clickCount: 1 });
  discordView.webContents.sendInputEvent({ type: 'mouseUp', x, y, button: 'left', clickCount: 1 });
});

// 在 Discord 页面中模拟鼠标移动
ipcMain.handle('mousemove-in-discord', async (_event, x, y) => {
  if (!discordView) return;
  discordView.webContents.sendInputEvent({ type: 'mouseMove', x, y });
});

// 在 Discord 页面中模拟按键
ipcMain.handle('keypress-in-discord', async (_event, key) => {
  if (!discordView) return;
  const keyMap = {
    ArrowUp: 'Up',
    ArrowDown: 'Down',
    ArrowLeft: 'Left',
    ArrowRight: 'Right',
    Enter: 'Return',
    Space: ' ',
  };
  const mapped = keyMap[key] || key;
  discordView.webContents.sendInputEvent({ type: 'keyDown', keyCode: mapped });
  discordView.webContents.sendInputEvent({ type: 'keyUp', keyCode: mapped });
});

// 导航到指定 URL
ipcMain.handle('navigate-discord', async (_event, url) => {
  if (!discordView) return;
  discordView.webContents.loadURL(url);
});

// 获取当前 Discord 页面 URL
ipcMain.handle('get-discord-url', async () => {
  if (!discordView) return '';
  return discordView.webContents.getURL();
});

// 静音/取消静音
ipcMain.handle('set-muted', async (_event, muted) => {
  if (!discordView) return;
  discordView.webContents.setAudioMuted(muted);
  return muted;
});

// 打开外部链接
ipcMain.handle('open-external', async (_event, url) => {
  const { shell } = require('electron');
  shell.openExternal(url);
});

// 切换 Discord DevTools
ipcMain.handle('toggle-devtools', async () => {
  if (!discordView) return;
  if (discordView.webContents.isDevToolsOpened()) {
    discordView.webContents.closeDevTools();
  } else {
    discordView.webContents.openDevTools({ mode: 'detach' });
  }
});

// ========== 配置文件持久化 ==========
const configPath = path.join(portableDir, 'config.json');

ipcMain.handle('load-config', async () => {
  try {
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    }
  } catch (e) {
    console.error('Load config failed:', e.message);
  }
  return null;
});

ipcMain.handle('save-config', async (_event, config) => {
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
    return true;
  } catch (e) {
    console.error('Save config failed:', e.message);
    return false;
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
