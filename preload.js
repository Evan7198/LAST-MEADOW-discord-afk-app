const { contextBridge, ipcRenderer } = require('electron');

// 暴露给控制面板 renderer 的 API
contextBridge.exposeInMainWorld('discordBot', {
  // 在 Discord 页面中执行任意 JS 代码
  executeInDiscord: (code) => ipcRenderer.invoke('execute-in-discord', code),

  // 模拟鼠标点击
  clickInDiscord: (x, y) => ipcRenderer.invoke('click-in-discord', x, y),

  // 模拟鼠标移动
  mousemoveInDiscord: (x, y) => ipcRenderer.invoke('mousemove-in-discord', x, y),

  // 模拟键盘按键
  keypressInDiscord: (key) => ipcRenderer.invoke('keypress-in-discord', key),

  // 导航到 URL
  navigateDiscord: (url) => ipcRenderer.invoke('navigate-discord', url),

  // 获取当前页面 URL
  getDiscordUrl: () => ipcRenderer.invoke('get-discord-url'),

  // 静音
  setMuted: (muted) => ipcRenderer.invoke('set-muted', muted),

  // 打开外部链接
  openExternal: (url) => ipcRenderer.invoke('open-external', url),

  // 切换 DevTools
  toggleDevTools: () => ipcRenderer.invoke('toggle-devtools'),

  // 配置持久化
  loadConfig: () => ipcRenderer.invoke('load-config'),
  saveConfig: (config) => ipcRenderer.invoke('save-config', config),
});
