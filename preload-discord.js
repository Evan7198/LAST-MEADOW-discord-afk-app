// Discord 页面的 preload 脚本
// 可在此注入辅助函数供自动化使用
const { contextBridge } = require('electron');

// 暴露一个辅助对象到 Discord 页面的 window 上
contextBridge.exposeInMainWorld('__botHelper', {
  // 查找匹配文本的按钮
  findButtonByText: (text) => {
    const buttons = document.querySelectorAll('button, [role="button"]');
    for (const btn of buttons) {
      if (btn.textContent.includes(text)) {
        const rect = btn.getBoundingClientRect();
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2, found: true };
      }
    }
    return { found: false };
  },
});
