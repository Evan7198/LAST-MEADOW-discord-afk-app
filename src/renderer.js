// ========== 国际化 ==========
let currentLang = 'zh';
const I18N = {
  zh: {
    subtitle: '\u2726 自动化助手 v1.1',
    section_features: '\u2699 功能选择',
    priority_hint: '\u2733 制作/战斗优先，冷却时自动连点冒险',
    mod_autoreturn: '\u27F2 自动返回 - 弹窗确认',
    mod_adventure: '\u2694 冒险 - 自动连点',
    mod_crafting: '\u266B 制作 - 节奏方向键',
    mod_battle: '\u2694 战斗',
    sub_archer: '\uD83C\uDFF9 射手 - 点击圆圈',
    sub_healer: '\u271A 牧师 - 翻牌配对',
    sub_warrior: '\u2697 骑士 - 接物圆盘',
    btn_start: '\u25B6 开始运行',
    btn_stop: '\u25A0 停止运行',
    section_tools: '\u2699 调试工具',
    tool_picker: '\u261A 元素选取',
    tool_explorer: '\u2630 元素浏览器',
    tool_refresh: '\u21BB 刷新',
    section_log: '\u270E 运行日志',
    // 配置标签
    lbl_return_btn: '返回按钮', lbl_adv_btn: '冒险按钮',
    lbl_click_interval: '点击间隔', lbl_random_delay: '随机延迟',
    lbl_scan_interval: '扫描间隔', lbl_craft_btn: '制作按钮',
    lbl_arrow_area: '箭头区域', lbl_craft_finish: '制作结束',
    lbl_key_delay: '按键延迟', lbl_battle_btn: '战斗按钮',
    lbl_battle_finish: '战斗结束', lbl_circle_target: '圆圈目标',
    lbl_click_delay: '点击延迟', lbl_card_area: '卡牌区域',
    lbl_flip_delay: '翻牌延迟', lbl_game_area: '游戏区域',
    lbl_move_delay: '移动延迟',
    // 扫描按钮
    btn_craft_scan: '\uD83D\uDD0D 抓取节奏区域结构',
    btn_healer_scan: '\uD83D\uDD0D 扫描卡牌结构',
    btn_warrior_scan: '\uD83D\uDD0D 扫描骑士区域',
    // 元素浏览器
    explorer_title: '元素浏览器',
    explorer_hint: '点击元素可在页面上高亮，双击复制选择器',
    // 日志消息
    log_pick_click: '[选取] 在右侧页面点击目标元素（ESC 取消）',
    log_pick_result: '[选取] {0}',
    log_pick_cancel: '[选取] 已取消',
    log_pick_mode: '[选取] 选取模式，点击页面元素（ESC 退出）',
    log_pick_copied: '[选取] 已复制到剪贴板',
    log_pick_exit: '[选取] 已退出',
    log_craft_scan_stop: '[制作] 停止抓取',
    log_craft_scan_start: '[制作] 开始连续抓取（再次点击停止）...',
    log_craft_scan_header: '===== sequences 内 character 详细结构 =====',
    log_craft_scan_done: '===== 抓取完成，有变化时会自动更新 =====',
    log_healer_scan_stop: '[牧师] 停止扫描',
    log_healer_scan_start: '[牧师] 开始连续扫描卡牌区域（再次点击停止）...',
    log_healer_scan_error: '[牧师] {0}',
    log_healer_scan_header: '===== 牧师卡牌区域扫描结果 =====',
    log_healer_scan_tree: '[牧师] 区域完整 DOM 树:',
    log_scan_done: '===== 扫描完成，有变化时自动更新 =====',
    log_warrior_scan_stop: '[骑士] 停止扫描',
    log_warrior_scan_start: '[骑士] 开始连续扫描（再次点击停止）...',
    log_warrior_scan_error: '[骑士] {0}',
    log_warrior_scan_header: '===== 骑士游戏区域扫描结果 =====',
    log_explorer_copied: '[浏览器] 已复制: {0}',
    log_return_popup: '[自动返回] 检测到弹窗，已点击确认',
    log_return_crafting: '[自动返回] 仍在制作中，继续节奏',
    log_return_battle: '[自动返回] 仍在战斗中，继续战斗',
    log_return_healer: '[自动返回] 仍在牧师翻牌中，继续',
    log_return_warrior: '[自动返回] 仍在骑士接物中，继续',
    log_craft_finish_click: '[制作] 点击结束按钮',
    log_craft_ended: '[制作] 制作结束',
    log_battle_finish_click: '[{0}] 点击结束按钮',
    log_battle_ended: '[战斗] 战斗结束',
    log_craft_ready: '[制作] 就绪，进入制作',
    log_battle_ready: '[战斗] 就绪，进入战斗',
    log_healer_detected: '[牧师] 检测到翻牌网格，进入牧师模式',
    log_warrior_detected: '[骑士] 检测到盾牌，进入骑士模式',
    log_archer_detected: '[射手] 进入射手模式',
    log_adventure_start: '[冒险] 制作/战斗冷却中，连点冒险',
    log_craft_keys: '[制作] {0}',
    log_healer_match: '[牧师] 发现匹配组 ({0}张)，开始翻牌',
    log_healer_flip_done: '[牧师] 翻牌完成，等待消除',
    log_no_features: '[系统] 未勾选功能',
    log_started: '[系统] 启动: {0}',
    log_stopped: '[系统] 已停止',
    log_refreshed: '[系统] 页面已刷新',
    log_config_loaded: '[系统] 配置已加载',
    log_ready: '[系统] Particle Discord BOT 已就绪',
    log_mod_adventure: '冒险',
    log_mod_crafting: '制作',
    log_mod_battle: '战斗(射手/牧师)',
    log_name_healer: '牧师',
    log_name_warrior: '骑士',
    log_name_archer: '射手',
    log_lang_switch: '[系统] 已切换为中文',
    log_devmode_on: '[系统] 开发者模式已开启',
    log_devmode_off: '[系统] 开发者模式已关闭',
    log_error: '[错误] {0}',
    log_adventure_error: '[冒险] {0}',
    log_craft_error: '[制作] {0}',
    log_battle_hit: '[战斗] 击中 {0} 个目标',
    log_battle_error: '[战斗] {0}',
    log_healer_error: '[牧师] {0}',
    log_warrior_error: '[骑士] {0}',
  },
  en: {
    subtitle: '\u2726 Auto Assistant v1.1',
    section_features: '\u2699 Features',
    priority_hint: '\u2733 Craft/Battle first, Adventure when on cooldown',
    mod_autoreturn: '\u27F2 Auto Return - Popup',
    mod_adventure: '\u2694 Adventure - Auto Click',
    mod_crafting: '\u266B Crafting - Rhythm Keys',
    mod_battle: '\u2694 Battle',
    sub_archer: '\uD83C\uDFF9 Archer - Click Circles',
    sub_healer: '\u271A Healer - Card Match',
    sub_warrior: '\u2697 Knight - Catch Items',
    btn_start: '\u25B6 Start',
    btn_stop: '\u25A0 Stop',
    section_tools: '\u2699 Debug Tools',
    tool_picker: '\u261A Picker',
    tool_explorer: '\u2630 Explorer',
    tool_refresh: '\u21BB Refresh',
    section_log: '\u270E Log',
    // config labels
    lbl_return_btn: 'Return Btn', lbl_adv_btn: 'Adv Btn',
    lbl_click_interval: 'Click Interval', lbl_random_delay: 'Random Delay',
    lbl_scan_interval: 'Scan Interval', lbl_craft_btn: 'Craft Btn',
    lbl_arrow_area: 'Arrow Area', lbl_craft_finish: 'Craft End',
    lbl_key_delay: 'Key Delay', lbl_battle_btn: 'Battle Btn',
    lbl_battle_finish: 'Battle End', lbl_circle_target: 'Circle Target',
    lbl_click_delay: 'Click Delay', lbl_card_area: 'Card Area',
    lbl_flip_delay: 'Flip Delay', lbl_game_area: 'Game Area',
    lbl_move_delay: 'Move Delay',
    // scan buttons
    btn_craft_scan: '\uD83D\uDD0D Scan Rhythm Area',
    btn_healer_scan: '\uD83D\uDD0D Scan Cards',
    btn_warrior_scan: '\uD83D\uDD0D Scan Knight Area',
    // explorer
    explorer_title: 'Element Explorer',
    explorer_hint: 'Click to highlight, double-click to copy selector',
    // log messages
    log_pick_click: '[Pick] Click target element on right page (ESC to cancel)',
    log_pick_result: '[Pick] {0}',
    log_pick_cancel: '[Pick] Cancelled',
    log_pick_mode: '[Pick] Picker mode, click page element (ESC to exit)',
    log_pick_copied: '[Pick] Copied to clipboard',
    log_pick_exit: '[Pick] Exited',
    log_craft_scan_stop: '[Craft] Scan stopped',
    log_craft_scan_start: '[Craft] Continuous scan started (click again to stop)...',
    log_craft_scan_header: '===== Character structure in sequences =====',
    log_craft_scan_done: '===== Scan complete, auto-update on changes =====',
    log_healer_scan_stop: '[Healer] Scan stopped',
    log_healer_scan_start: '[Healer] Continuous card scan started (click again to stop)...',
    log_healer_scan_error: '[Healer] {0}',
    log_healer_scan_header: '===== Healer card area scan results =====',
    log_healer_scan_tree: '[Healer] Full DOM tree:',
    log_scan_done: '===== Scan complete, auto-update on changes =====',
    log_warrior_scan_stop: '[Knight] Scan stopped',
    log_warrior_scan_start: '[Knight] Continuous scan started (click again to stop)...',
    log_warrior_scan_error: '[Knight] {0}',
    log_warrior_scan_header: '===== Knight game area scan results =====',
    log_explorer_copied: '[Explorer] Copied: {0}',
    log_return_popup: '[Auto Return] Popup detected, confirmed',
    log_return_crafting: '[Auto Return] Still crafting, continuing rhythm',
    log_return_battle: '[Auto Return] Still in battle, continuing',
    log_return_healer: '[Auto Return] Still in healer mode, continuing',
    log_return_warrior: '[Auto Return] Still in knight mode, continuing',
    log_craft_finish_click: '[Craft] Clicked finish button',
    log_craft_ended: '[Craft] Crafting ended',
    log_battle_finish_click: '[{0}] Clicked finish button',
    log_battle_ended: '[Battle] Battle ended',
    log_craft_ready: '[Craft] Ready, entering crafting',
    log_battle_ready: '[Battle] Ready, entering battle',
    log_healer_detected: '[Healer] Card grid detected, entering healer mode',
    log_warrior_detected: '[Knight] Shield detected, entering knight mode',
    log_archer_detected: '[Archer] Entering archer mode',
    log_adventure_start: '[Adventure] Craft/Battle on cooldown, clicking adventure',
    log_craft_keys: '[Craft] {0}',
    log_healer_match: '[Healer] Found match group ({0} cards), flipping',
    log_healer_flip_done: '[Healer] Flip complete, waiting for clear',
    log_no_features: '[System] No features selected',
    log_started: '[System] Started: {0}',
    log_stopped: '[System] Stopped',
    log_refreshed: '[System] Page refreshed',
    log_config_loaded: '[System] Config loaded',
    log_ready: '[System] Particle Discord BOT ready',
    log_mod_adventure: 'Adventure',
    log_mod_crafting: 'Crafting',
    log_mod_battle: 'Battle(Archer/Healer)',
    log_name_healer: 'Healer',
    log_name_warrior: 'Knight',
    log_name_archer: 'Archer',
    log_lang_switch: '[System] Switched to English',
    log_devmode_on: '[System] Dev mode enabled',
    log_devmode_off: '[System] Dev mode disabled',
    log_error: '[Error] {0}',
    log_adventure_error: '[Adventure] {0}',
    log_craft_error: '[Craft] {0}',
    log_battle_hit: '[Battle] Hit {0} targets',
    log_battle_error: '[Battle] {0}',
    log_healer_error: '[Healer] {0}',
    log_warrior_error: '[Knight] {0}',
  }
};

function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  // 更新开始/停止按钮
  const btn = document.getElementById('btn-start');
  if (btn.classList.contains('running')) {
    btn.innerHTML = I18N[lang].btn_stop;
  } else {
    btn.innerHTML = I18N[lang].btn_start;
  }
  // 更新语言按钮自身文字
  document.getElementById('btn-lang').innerHTML = lang === 'zh'
    ? '\uD83C\uDF10 Language / 语言'
    : '\uD83C\uDF10 语言 / Language';
}

// ========== 日志翻译辅助 ==========
function t(key, ...args) {
  let str = (I18N[currentLang] && I18N[currentLang][key]) || key;
  for (let i = 0; i < args.length; i++) str = str.replace(`{${i}}`, args[i]);
  return str;
}

// ========== 日志 ==========
const logBox = document.getElementById('log-box');
function log(msg, level = 'info') {
  const time = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = `<span class="time">[${time}]</span> <span class="${level}">${msg}</span>`;
  logBox.appendChild(entry);
  logBox.scrollTop = logBox.scrollHeight;
  while (logBox.children.length > 200) logBox.removeChild(logBox.firstChild);
}
let lastLogMsg = '', lastLogTime = 0;
function logOnce(msg, level = 'info') {
  const now = Date.now();
  if (msg === lastLogMsg && now - lastLogTime < 3000) return;
  lastLogMsg = msg; lastLogTime = now;
  log(msg, level);
}

// ========== 配置持久化 ==========
// 所有需要保存的表单元素 ID
const CONFIG_IDS = [
  // 勾选框
  'chk-autoreturn', 'chk-adventure', 'chk-crafting', 'chk-battle', 'chk-devmode',
  // 自动返回
  'autoreturn-btn',
  // 冒险
  'adventure-btn', 'adventure-interval', 'adventure-delay-min', 'adventure-delay-max',
  // 制作
  'crafting-btn', 'crafting-container', 'crafting-finish',
  'crafting-delay-min', 'crafting-delay-max', 'crafting-interval',
  // 战斗（射手）
  'battle-btn', 'battle-selector', 'battle-finish',
  'battle-delay-min', 'battle-delay-max', 'battle-interval',
  // 牧师（翻牌）
  'healer-container',
  // 骑士（接物）
  'warrior-container', 'warrior-delay-min', 'warrior-delay-max', 'warrior-interval',
  'healer-delay-min', 'healer-delay-max', 'healer-interval',
];

function collectConfig() {
  const config = {};
  for (const id of CONFIG_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    config[id] = el.type === 'checkbox' ? el.checked : el.value;
  }
  config._lang = currentLang;
  config._muted = !!document.getElementById('btn-mute').classList.contains('active');
  return config;
}

function applyConfig(config) {
  if (!config) return;
  for (const [id, val] of Object.entries(config)) {
    if (id.startsWith('_')) continue; // 自定义字段跳过
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.type === 'checkbox') {
      el.checked = val;
      el.dispatchEvent(new Event('change'));
    } else if (el.type === 'range') {
      el.value = val;
      el.dispatchEvent(new Event('input'));
    } else {
      el.value = val;
      if (val) el.classList.add('has-value');
    }
  }
  // 恢复语言
  if (config._lang) applyLang(config._lang);
  // 恢复静音
  if (config._muted) {
    document.getElementById('btn-mute').classList.add('active');
    document.getElementById('btn-mute').innerHTML = '&#9835;&#822;';
    window.discordBot.setMuted(true);
  }
}

let saveTimer = null;
function scheduleSave() {
  // 防抖：300ms 内多次修改只保存一次
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    window.discordBot.saveConfig(collectConfig());
  }, 300);
}

// 监听所有配置元素的变化
function setupAutoSave() {
  for (const id of CONFIG_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.type === 'checkbox') {
      el.addEventListener('change', scheduleSave);
    } else if (el.type === 'range') {
      el.addEventListener('input', scheduleSave);
    } else {
      // text / number inputs — 监听多种事件
      el.addEventListener('input', scheduleSave);
      el.addEventListener('change', scheduleSave);
    }
  }
  // picker 选取完成后也会改 input value，通过 MutationObserver 捕获
  document.querySelectorAll('.picker-group input').forEach(input => {
    const observer = new MutationObserver(scheduleSave);
    observer.observe(input, { attributes: true, attributeFilter: ['value'] });
    // 也监听由 JS 设置 value 的情况
    const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
    const originalSet = desc.set;
    Object.defineProperty(input, 'value', {
      set(v) { originalSet.call(this, v); scheduleSave(); },
      get() { return desc.get.call(this); },
    });
  });
}

// ========== 静音按钮 ==========
document.getElementById('btn-mute').addEventListener('click', () => {
  const btn = document.getElementById('btn-mute');
  const muted = !btn.classList.contains('active');
  btn.classList.toggle('active', muted);
  btn.innerHTML = muted ? '&#9835;&#822;' : '&#9835;';
  window.discordBot.setMuted(muted);
  scheduleSave();
});

// ========== 语言切换 ==========
document.getElementById('btn-lang').addEventListener('click', () => {
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  applyLang(newLang);
  scheduleSave();
  log(t('log_lang_switch'));
});

// ========== Discord 链接 ==========
document.getElementById('btn-discord-link').addEventListener('click', (e) => {
  e.preventDefault();
  window.discordBot.openExternal('https://discord.gg/particle');
});

// ========== 开发者模式 ==========
document.getElementById('chk-devmode').addEventListener('change', (e) => {
  document.body.classList.toggle('dev-mode', e.target.checked);
  log(e.target.checked ? t('log_devmode_on') : t('log_devmode_off'), 'warn');
});

// ========== 勾选框联动 ==========
['autoreturn', 'adventure', 'crafting', 'battle'].forEach((mod) => {
  const chk = document.getElementById(`chk-${mod}`);
  const cfg = document.getElementById(`config-${mod}`);
  chk.addEventListener('change', () => cfg.classList.toggle('collapsed', !chk.checked));
});

// 战斗子模块折叠/展开
document.querySelectorAll('.sub-module-header').forEach(header => {
  header.addEventListener('click', () => {
    const targetId = header.dataset.target;
    const body = document.getElementById(targetId);
    if (!body) return;
    const isCollapsed = body.classList.toggle('collapsed');
    header.classList.toggle('expanded', !isCollapsed);
  });
});

// ========== 滑块联动 ==========
['adventure', 'crafting', 'battle', 'healer', 'warrior'].forEach((mod) => {
  const slider = document.getElementById(`${mod}-interval`);
  const valSpan = document.getElementById(`${mod}-interval-val`);
  if (!slider || !valSpan) return;
  slider.addEventListener('input', () => { valSpan.textContent = slider.value + 'ms'; });
});

// ========== 工具函数 ==========
function esc(s) { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

// ========== 元素选取器（原有） ==========
const PICKER_INJECT_CODE = `
(function() {
  if (window.__pickerActive) return 'already_active';
  window.__pickerActive = true;
  const overlay = document.createElement('div');
  overlay.id = '__picker_overlay';
  overlay.style.cssText = 'position:fixed;pointer-events:none;z-index:999999;border:3px solid #e94560;border-radius:4px;background:rgba(233,69,96,0.15);transition:all 0.1s ease;display:none;';
  document.body.appendChild(overlay);
  const tag = document.createElement('div');
  tag.id = '__picker_tag';
  tag.style.cssText = 'position:fixed;z-index:999999;pointer-events:none;background:#e94560;color:#fff;font-size:11px;padding:2px 8px;border-radius:3px;font-family:Consolas,monospace;white-space:nowrap;display:none;';
  document.body.appendChild(tag);
  let lastEl = null;
  function getSelector(el) {
    if (el.id) return '#' + el.id;
    const parts = [];
    let cur = el;
    while (cur && cur !== document.body) {
      let sel = cur.tagName.toLowerCase();
      if (cur.id) { parts.unshift('#' + cur.id); break; }
      if (cur.className && typeof cur.className === 'string') {
        const classes = cur.className.trim().split(/\\s+/).filter(c => c && !c.startsWith('__'));
        if (classes.length) sel += '.' + classes.join('.');
      }
      const parent = cur.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll(':scope > ' + sel);
        if (siblings.length > 1) {
          const idx = Array.from(parent.children).indexOf(cur) + 1;
          sel += ':nth-child(' + idx + ')';
        }
      }
      parts.unshift(sel);
      cur = cur.parentElement;
      if (parts.length >= 4) break;
    }
    return parts.join(' > ');
  }
  function onMove(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el || el === overlay || el === tag || el === lastEl) return;
    lastEl = el;
    const rect = el.getBoundingClientRect();
    overlay.style.left = rect.left+'px'; overlay.style.top = rect.top+'px';
    overlay.style.width = rect.width+'px'; overlay.style.height = rect.height+'px';
    overlay.style.display = 'block';
    const sel = getSelector(el);
    tag.textContent = sel + '  (' + Math.round(rect.width) + 'x' + Math.round(rect.height) + ')';
    tag.style.left = Math.min(rect.left, window.innerWidth - 300) + 'px';
    tag.style.top = Math.max(0, rect.top - 24) + 'px';
    tag.style.display = 'block';
  }
  function onClick(e) {
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    const el = document.elementFromPoint(e.clientX, e.clientY);
    window.__pickerResult = el ? getSelector(el) : '';
    cleanup(); return false;
  }
  function onKeydown(e) { if (e.key === 'Escape') { cleanup(); window.__pickerResult = ''; } }
  function cleanup() {
    window.__pickerActive = false;
    document.removeEventListener('mousemove', onMove, true);
    document.removeEventListener('click', onClick, true);
    document.removeEventListener('keydown', onKeydown, true);
    overlay.remove(); tag.remove();
  }
  document.addEventListener('mousemove', onMove, true);
  document.addEventListener('click', onClick, true);
  document.addEventListener('keydown', onKeydown, true);
  return 'picker_started';
})()`;
const PICKER_READ = `(function(){ const r=window.__pickerResult; if(r!==undefined){delete window.__pickerResult;return r;} return null; })()`;
const PICKER_CANCEL = `(function(){ window.__pickerActive=false; document.getElementById('__picker_overlay')?.remove(); document.getElementById('__picker_tag')?.remove(); window.__pickerResult=''; })()`;

let pickerTargetInput = null, pickerPollTimer = null;
async function startPicker(targetInputId) {
  if (pickerPollTimer) cancelPicker();
  pickerTargetInput = document.getElementById(targetInputId);
  log(t('log_pick_click'), 'pick');
  document.querySelectorAll('.btn-pick').forEach(b => b.classList.toggle('picking', b.dataset.target === targetInputId));
  await window.discordBot.executeInDiscord(PICKER_INJECT_CODE);
  pickerPollTimer = setInterval(async () => {
    const r = await window.discordBot.executeInDiscord(PICKER_READ);
    if (r !== null) {
      clearInterval(pickerPollTimer); pickerPollTimer = null;
      document.querySelectorAll('.btn-pick').forEach(b => b.classList.remove('picking'));
      document.getElementById('btn-picker').classList.remove('active');
      if (r) { pickerTargetInput.value = r; pickerTargetInput.classList.add('has-value'); log(t('log_pick_result', r), 'pick'); }
      else { log(t('log_pick_cancel'), 'warn'); }
      pickerTargetInput = null;
    }
  }, 100);
}
async function cancelPicker() {
  if (pickerPollTimer) { clearInterval(pickerPollTimer); pickerPollTimer = null; }
  await window.discordBot.executeInDiscord(PICKER_CANCEL);
  document.querySelectorAll('.btn-pick').forEach(b => b.classList.remove('picking'));
  document.getElementById('btn-picker').classList.remove('active');
  pickerTargetInput = null;
}
document.querySelectorAll('.btn-pick').forEach(btn => {
  btn.addEventListener('click', () => btn.classList.contains('picking') ? cancelPicker() : startPicker(btn.dataset.target));
});
document.getElementById('btn-picker').addEventListener('click', async () => {
  const btn = document.getElementById('btn-picker');
  if (btn.classList.contains('active')) { cancelPicker(); return; }
  btn.classList.add('active');
  log(t('log_pick_mode'), 'pick');
  await window.discordBot.executeInDiscord(PICKER_INJECT_CODE);
  pickerPollTimer = setInterval(async () => {
    const r = await window.discordBot.executeInDiscord(PICKER_READ);
    if (r !== null) {
      clearInterval(pickerPollTimer); pickerPollTimer = null;
      btn.classList.remove('active');
      if (r) { log(t('log_pick_result', r), 'pick'); navigator.clipboard.writeText(r); log(t('log_pick_copied'), 'pick'); }
      else { log(t('log_pick_exit'), 'warn'); }
    }
  }, 100);
});

// ================================================================
//  制作区域 DOM 抓取
// ================================================================
let snapshotTimer = null;
document.getElementById('btn-crafting-snapshot').addEventListener('click', async () => {
  // 如果正在连续抓取，点击则停止
  if (snapshotTimer) {
    clearInterval(snapshotTimer);
    snapshotTimer = null;
    log(t('log_craft_scan_stop'), 'warn');
    document.getElementById('btn-crafting-snapshot').textContent = '\u{1F50D} 抓取节奏区域结构';
    return;
  }

  log(t('log_craft_scan_start'), 'pick');
  document.getElementById('btn-crafting-snapshot').textContent = '\u{1F6D1} 停止抓取';

  let lastSnapshot = '';

  async function capture() {
    // 直接扫描 sequences 下的每个 character 及其所有后代，无深度限制
    const code = `(function(){
      const seq = document.querySelector('.sequences__34527');
      if (!seq) return null;
      const chars = seq.querySelectorAll('.character__34527');
      const result = [];
      for (let i = 0; i < chars.length; i++) {
        const ch = chars[i];
        function walk(el, depth) {
          const tag = el.tagName.toLowerCase();
          if (tag==='script'||tag==='style') return null;
          const cls = (typeof el.className==='string') ? el.className.trim() : '';
          const attrs = {};
          for (const a of el.attributes) {
            if (a.name!=='class'&&a.name!=='id'&&a.name!=='style') attrs[a.name]=a.value;
          }
          const style = getComputedStyle(el);
          const transform = style.transform!=='none' ? style.transform : '';
          const bgImage = style.backgroundImage!=='none' ? style.backgroundImage.substring(0,120) : '';
          const rect = el.getBoundingClientRect();
          const text = (el.childNodes.length===1&&el.childNodes[0].nodeType===3)
            ? el.textContent.trim().substring(0,50) : '';
          const src = el.src||el.getAttribute('src')||'';
          const htmlContent = el.innerHTML ? el.innerHTML.substring(0,200) : '';
          const children = [];
          for (const c of el.children) { const r=walk(c,depth+1); if(r) children.push(r); }
          return {
            tag, cls, attrs, transform, bgImage, src, text, htmlContent,
            w:Math.round(rect.width), h:Math.round(rect.height),
            x:Math.round(rect.x), y:Math.round(rect.y),
            children
          };
        }
        result.push({ index: i, tree: walk(ch, 0) });
      }
      return result;
    })()`;

    const chars = await window.discordBot.executeInDiscord(code);
    if (!chars) return;

    // 生成摘要，只在有变化时输出
    const summary = JSON.stringify(chars);
    if (summary === lastSnapshot) return;
    lastSnapshot = summary;

    log(t('log_craft_scan_header'), 'warn');
    for (const ch of chars) {
      if (!ch.tree) continue;
      function printNode(node, indent) {
        let info = '  '.repeat(indent) + '<' + node.tag + '>';
        if (node.cls) info += ' class="' + node.cls.substring(0,80) + '"';
        if (node.src) info += ' src="' + node.src.substring(0,100) + '"';
        if (node.transform) info += ' transform="' + node.transform + '"';
        if (node.bgImage) info += ' bg="' + node.bgImage.substring(0,100) + '"';
        for (const [k,v] of Object.entries(node.attrs)) info += ' ' + k + '="' + v + '"';
        if (node.text) info += ' "' + node.text + '"';
        info += ' [' + node.w + 'x' + node.h + ' @' + node.x + ',' + node.y + ']';
        if (node.children.length===0 && node.htmlContent) info += ' html="' + node.htmlContent.substring(0,100) + '"';
        log(info, 'pick');
        for (const c of node.children) printNode(c, indent+1);
      }
      log('--- character[' + ch.index + '] ---', 'warn');
      printNode(ch.tree, 0);
    }
    log(t('log_craft_scan_done'), 'warn');
  }

  // 立即执行一次，然后每 300ms 检测变化
  await capture();
  snapshotTimer = setInterval(capture, 300);
});

// ================================================================
//  牧师卡牌区域 DOM 深度扫描
// ================================================================
let healerScanTimer = null;
document.getElementById('btn-healer-scan').addEventListener('click', async () => {
  if (healerScanTimer) {
    clearInterval(healerScanTimer);
    healerScanTimer = null;
    log(t('log_healer_scan_stop'), 'warn');
    document.getElementById('btn-healer-scan').textContent = '\u{1F50D} 扫描卡牌结构';
    return;
  }

  log(t('log_healer_scan_start'), 'pick');
  document.getElementById('btn-healer-scan').textContent = '\u{1F6D1} 停止扫描';

  let lastSnapshot = '';

  async function scanCards() {
    // 通用深度扫描：获取整个 body 内的翻牌相关区域
    // 优先使用用户配置的卡牌区域选择器，没有则扫描全页面可见区域
    const containerSel = document.getElementById('healer-container').value;

    const code = `(function(){
      const containerSel = '${esc(containerSel)}';
      let root = containerSel ? document.querySelector(containerSel) : null;
      if (!root) {
        const panels = document.querySelectorAll('[class*="root"][class*="enterDone"], [class*="container"], [class*="game"], [class*="board"], [class*="card"]');
        for (const p of panels) {
          const r = p.getBoundingClientRect();
          if (r.width > 200 && r.height > 200) { root = p; break; }
        }
      }
      if (!root) return { error: '未找到卡牌区域，请先用元素选取器设置"卡牌区域"选择器' };

      function walkNode(el, depth, maxDepth) {
        if (depth > maxDepth) return null;
        const tag = el.tagName.toLowerCase();
        if (tag==='script'||tag==='style'||tag==='link') return null;
        const cls = (typeof el.className==='string') ? el.className.trim() : '';
        const id = el.id || '';
        const attrs = {};
        for (const a of el.attributes) {
          if (a.name!=='class'&&a.name!=='style') attrs[a.name]=a.value;
        }
        const style = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        const text = (el.childNodes.length===1&&el.childNodes[0].nodeType===3)
          ? el.textContent.trim().substring(0,80) : '';
        const src = el.src||el.getAttribute('src')||'';
        const alt = el.getAttribute('alt')||'';
        const dataAttrs = {};
        for (const k of Object.keys(el.dataset)) dataAttrs[k] = el.dataset[k];

        const children = [];
        for (const c of el.children) {
          const r = walkNode(c, depth+1, maxDepth);
          if (r) children.push(r);
        }

        return {
          tag, id, cls, attrs, dataAttrs,
          src, alt, text,
          transform: style.transform!=='none'?style.transform:'',
          bgImage: style.backgroundImage!=='none'?style.backgroundImage.substring(0,200):'',
          opacity: style.opacity,
          visibility: style.visibility,
          pointerEvents: style.pointerEvents,
          w: Math.round(rect.width), h: Math.round(rect.height),
          x: Math.round(rect.x), y: Math.round(rect.y),
          children
        };
      }

      // 扫描根容器本身及所有后代，深度 10 层
      const rootInfo = walkNode(root, 0, 10);

      return { rootTree: rootInfo };
    })()`;

    const result = await window.discordBot.executeInDiscord(code);
    if (!result) return;
    if (result.error) { log(t('log_healer_scan_error', result.error), 'error'); return; }

    const summary = JSON.stringify(result);
    if (summary === lastSnapshot) return;
    lastSnapshot = summary;

    log(t('log_healer_scan_header'), 'warn');

    // 输出完整树
    log(t('log_healer_scan_tree'), 'warn');
    function printNode(node, indent) {
      if (!node) return;
      let info = '  '.repeat(indent) + '<' + node.tag + '>';
      if (node.id) info += ` id="${node.id}"`;
      if (node.cls) info += ` class="${node.cls.substring(0,80)}"`;
      if (node.src) info += ` src="${node.src.substring(0,100)}"`;
      if (node.alt) info += ` alt="${node.alt}"`;
      for (const [k,v] of Object.entries(node.attrs)) info += ` ${k}="${v}"`;
      for (const [k,v] of Object.entries(node.dataAttrs)) info += ` data-${k}="${v}"`;
      if (node.transform) info += ` transform="${node.transform}"`;
      if (node.bgImage) info += ` bg="${node.bgImage.substring(0,100)}"`;
      if (node.opacity !== '1') info += ` opacity=${node.opacity}`;
      if (node.text) info += ` "${node.text}"`;
      info += ` [${node.w}x${node.h} @${node.x},${node.y}]`;
      log(info, 'pick');
      for (const c of node.children) printNode(c, indent + 1);
    }
    printNode(result.rootTree, 0);
    log(t('log_scan_done'), 'warn');
  }

  await scanCards();
  healerScanTimer = setInterval(scanCards, 500);
});

// ================================================================
//  骑士游戏区域 DOM 深度扫描
// ================================================================
let warriorScanTimer = null;
document.getElementById('btn-warrior-scan').addEventListener('click', async () => {
  if (warriorScanTimer) {
    clearInterval(warriorScanTimer);
    warriorScanTimer = null;
    log(t('log_warrior_scan_stop'), 'warn');
    document.getElementById('btn-warrior-scan').textContent = '\u{1F50D} 扫描骑士区域';
    return;
  }

  log(t('log_warrior_scan_start'), 'pick');
  document.getElementById('btn-warrior-scan').textContent = '\u{1F6D1} 停止扫描';

  let lastSnapshot = '';

  async function scanWarrior() {
    const containerSel = document.getElementById('warrior-container').value;

    const code = `(function(){
      const containerSel = '${esc(containerSel)}';
      let root = containerSel ? document.querySelector(containerSel) : null;
      if (!root) {
        const panels = document.querySelectorAll('[class*="root"][class*="enterDone"], [class*="container"], [class*="game"]');
        for (const p of panels) {
          const r = p.getBoundingClientRect();
          if (r.width > 200 && r.height > 200) { root = p; break; }
        }
      }
      if (!root) return { error: '未找到骑士区域，请先设置"游戏区域"选择器' };

      function walkNode(el, depth, maxDepth) {
        if (depth > maxDepth) return null;
        const tag = el.tagName.toLowerCase();
        if (tag==='script'||tag==='style'||tag==='link') return null;
        const cls = (typeof el.className==='string') ? el.className.trim() : '';
        const id = el.id || '';
        const attrs = {};
        for (const a of el.attributes) {
          if (a.name!=='class'&&a.name!=='style') attrs[a.name]=a.value;
        }
        const style = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        const text = (el.childNodes.length===1&&el.childNodes[0].nodeType===3)
          ? el.textContent.trim().substring(0,80) : '';
        const src = el.src||el.getAttribute('src')||'';
        const alt = el.getAttribute('alt')||'';
        const dataAttrs = {};
        for (const k of Object.keys(el.dataset)) dataAttrs[k] = el.dataset[k];
        const children = [];
        for (const c of el.children) {
          const r = walkNode(c, depth+1, maxDepth);
          if (r) children.push(r);
        }
        return {
          tag, id, cls, attrs, dataAttrs, src, alt, text,
          transform: style.transform!=='none'?style.transform:'',
          bgImage: style.backgroundImage!=='none'?style.backgroundImage.substring(0,200):'',
          opacity: style.opacity, visibility: style.visibility,
          left: style.left, top: style.top, position: style.position,
          w: Math.round(rect.width), h: Math.round(rect.height),
          x: Math.round(rect.x), y: Math.round(rect.y),
          children
        };
      }
      return { rootTree: walkNode(root, 0, 10) };
    })()`;

    const result = await window.discordBot.executeInDiscord(code);
    if (!result) return;
    if (result.error) { log(t('log_warrior_scan_error', result.error), 'error'); return; }

    const summary = JSON.stringify(result);
    if (summary === lastSnapshot) return;
    lastSnapshot = summary;

    log(t('log_warrior_scan_header'), 'warn');
    function printNode(node, indent) {
      if (!node) return;
      let info = '  '.repeat(indent) + '<' + node.tag + '>';
      if (node.id) info += ' id="' + node.id + '"';
      if (node.cls) info += ' class="' + node.cls.substring(0,80) + '"';
      if (node.src) info += ' src="' + node.src.substring(0,100) + '"';
      if (node.alt) info += ' alt="' + node.alt + '"';
      for (const [k,v] of Object.entries(node.attrs)) info += ' ' + k + '="' + v + '"';
      for (const [k,v] of Object.entries(node.dataAttrs)) info += ' data-' + k + '="' + v + '"';
      if (node.transform) info += ' transform="' + node.transform + '"';
      if (node.position && node.position !== 'static') info += ' pos=' + node.position;
      if (node.left && node.left !== 'auto') info += ' left=' + node.left;
      if (node.top && node.top !== 'auto') info += ' top=' + node.top;
      if (node.bgImage) info += ' bg="' + node.bgImage.substring(0,100) + '"';
      if (node.opacity !== '1') info += ' opacity=' + node.opacity;
      if (node.text) info += ' "' + node.text + '"';
      info += ' [' + node.w + 'x' + node.h + ' @' + node.x + ',' + node.y + ']';
      log(info, 'pick');
      for (const c of node.children) printNode(c, indent + 1);
    }
    printNode(result.rootTree, 0);
    log(t('log_scan_done'), 'warn');
  }

  await scanWarrior();
  warriorScanTimer = setInterval(scanWarrior, 300);
});

// ================================================================
//  元素浏览器
// ================================================================
const explorerPanel = document.getElementById('panel-explorer');
const explorerTree = document.getElementById('explorer-tree');
const explorerSearch = document.getElementById('explorer-search');
const explorerSelected = document.getElementById('explorer-selected');
let selectedNodeSelector = '';

// 打开 / 关闭
document.getElementById('btn-explorer').addEventListener('click', () => {
  explorerPanel.classList.remove('hidden');
  loadTree('body', 0, explorerTree);
});
document.getElementById('btn-explorer-close').addEventListener('click', () => {
  explorerPanel.classList.add('hidden');
  clearHighlight();
});
document.getElementById('btn-explorer-refresh').addEventListener('click', () => {
  explorerTree.innerHTML = '';
  loadTree('body', 0, explorerTree);
});

// 搜索过滤
let searchTimeout;
explorerSearch.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const q = explorerSearch.value.trim().toLowerCase();
    if (!q) { explorerTree.innerHTML = ''; loadTree('body', 0, explorerTree); return; }
    searchElements(q);
  }, 300);
});

// 获取子元素列表
async function getChildren(parentPath) {
  const code = `
    (function(){
      const parent = document.querySelector('${esc(parentPath)}') || document.body;
      const result = [];
      for (let i = 0; i < parent.children.length && i < 200; i++) {
        const el = parent.children[i];
        const tag = el.tagName.toLowerCase();
        if (tag === 'script' || tag === 'style' || tag === 'link' || tag === 'noscript') continue;
        if (el.id && el.id.startsWith('__picker')) continue;
        const id = el.id || '';
        const cls = (typeof el.className === 'string') ? el.className.trim().split(/\\s+/).filter(c=>c).join('.') : '';
        const childCount = el.children.length;
        const text = el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
          ? el.textContent.trim().substring(0, 30) : '';
        const rect = el.getBoundingClientRect();
        const visible = rect.width > 0 && rect.height > 0;
        // 构建当前元素在父级中的唯一选择器
        let sel = tag;
        if (id) { sel = '#' + id; }
        else if (cls) { sel += '.' + cls; }
        // nth-child 去重
        const sameSiblings = parent.querySelectorAll(':scope > ' + (id ? '#'+id : tag + (cls ? '.'+cls.split('.')[0] : '')));
        const nth = sameSiblings.length > 1 ? ':nth-child(' + (i+1) + ')' : '';
        result.push({ tag, id, cls, childCount, text, visible, nth, index: i });
      }
      return result;
    })()`;
  return await window.discordBot.executeInDiscord(code);
}

// 搜索元素
async function searchElements(query) {
  const code = `
    (function(){
      const all = document.querySelectorAll('*');
      const result = [];
      const q = '${esc(query)}';
      for (const el of all) {
        if (result.length >= 100) break;
        const tag = el.tagName.toLowerCase();
        if (tag==='script'||tag==='style'||tag==='link'||tag==='noscript') continue;
        const id = el.id || '';
        const cls = (typeof el.className==='string') ? el.className.trim() : '';
        const haystack = (tag+' '+id+' '+cls).toLowerCase();
        if (!haystack.includes(q)) continue;
        // 构建完整选择器
        function getSel(e) {
          if (e.id) return '#'+e.id;
          const parts = [];
          let cur = e;
          while (cur && cur !== document.body) {
            let s = cur.tagName.toLowerCase();
            if (cur.id) { parts.unshift('#'+cur.id); break; }
            if (cur.className && typeof cur.className==='string') {
              const c = cur.className.trim().split(/\\s+/).filter(x=>x);
              if (c.length) s += '.'+c.join('.');
            }
            const p = cur.parentElement;
            if (p) {
              const sibs = p.querySelectorAll(':scope > '+s);
              if (sibs.length>1) s += ':nth-child('+(Array.from(p.children).indexOf(cur)+1)+')';
            }
            parts.unshift(s);
            cur = cur.parentElement;
            if (parts.length>=4) break;
          }
          return parts.join(' > ');
        }
        const rect = el.getBoundingClientRect();
        result.push({
          tag, id, cls: cls.split(/\\s+/).join('.'),
          selector: getSel(el),
          childCount: el.children.length,
          visible: rect.width>0 && rect.height>0,
          w: Math.round(rect.width), h: Math.round(rect.height)
        });
      }
      return result;
    })()`;
  const results = await window.discordBot.executeInDiscord(code);
  explorerTree.innerHTML = '';
  if (!results || !results.length) {
    explorerTree.innerHTML = '<div style="padding:10px;color:#666;">未找到匹配元素</div>';
    return;
  }
  for (const r of results) {
    const node = createFlatNode(r);
    explorerTree.appendChild(node);
  }
}

// 构建路径
function buildChildPath(parentPath, child) {
  let sel = child.tag;
  if (child.id) return '#' + child.id;
  if (child.cls) sel += '.' + child.cls;
  sel += child.nth;
  return parentPath === 'body' ? 'body > ' + sel : parentPath + ' > ' + sel;
}

// 创建树节点
function createTreeNode(parentPath, child) {
  const fullPath = buildChildPath(parentPath, child);
  const row = document.createElement('div');
  row.className = 'tree-node';
  row.dataset.selector = fullPath;

  const depth = fullPath.split(' > ').length - 1;
  row.style.paddingLeft = (8 + depth * 14) + 'px';

  const expandBtn = document.createElement('span');
  expandBtn.className = 'expand-btn' + (child.childCount > 0 ? ' has-children' : '');
  expandBtn.textContent = child.childCount > 0 ? '\u25B6' : ' ';
  row.appendChild(expandBtn);

  const content = document.createElement('span');
  content.innerHTML = buildNodeLabel(child);
  row.appendChild(content);

  let expanded = false;
  let childContainer = null;

  // 单击：高亮 + 选中
  row.addEventListener('click', (e) => {
    e.stopPropagation();
    selectNode(fullPath, row);
  });

  // 双击：复制
  row.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullPath);
    log(t('log_explorer_copied', fullPath), 'pick');
  });

  // 展开/折叠
  expandBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    if (child.childCount === 0) return;
    expanded = !expanded;
    expandBtn.textContent = expanded ? '\u25BC' : '\u25B6';
    if (expanded) {
      if (!childContainer) {
        childContainer = document.createElement('div');
        childContainer.className = 'tree-children';
        row.parentNode.insertBefore(childContainer, row.nextSibling);
        await loadTree(fullPath, depth + 1, childContainer);
      }
      childContainer.style.display = '';
    } else if (childContainer) {
      childContainer.style.display = 'none';
    }
  });

  return row;
}

// 搜索结果的扁平节点
function createFlatNode(r) {
  const row = document.createElement('div');
  row.className = 'tree-node';
  row.dataset.selector = r.selector;
  row.style.paddingLeft = '8px';
  const content = document.createElement('span');
  content.innerHTML = `<span class="node-tag">${r.tag}</span>`
    + (r.id ? `<span class="node-id">#${r.id}</span>` : '')
    + (r.cls ? `<span class="node-class">.${r.cls.substring(0,40)}</span>` : '')
    + `<span class="node-size">${r.w}x${r.h}</span>`;
  row.appendChild(content);
  row.addEventListener('click', (e) => { e.stopPropagation(); selectNode(r.selector, row); });
  row.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(r.selector);
    log(t('log_explorer_copied', r.selector), 'pick');
  });
  return row;
}

function buildNodeLabel(child) {
  let html = `<span class="node-tag">${child.tag}</span>`;
  if (child.id) html += `<span class="node-id">#${child.id}</span>`;
  if (child.cls) html += `<span class="node-class">.${child.cls.substring(0, 30)}</span>`;
  if (child.text) html += ` <span class="node-text">"${child.text}"</span>`;
  if (child.childCount > 0) html += `<span class="node-size">(${child.childCount})</span>`;
  if (!child.visible) html += `<span class="node-size">[hidden]</span>`;
  return html;
}

async function loadTree(parentPath, depth, container) {
  const children = await getChildren(parentPath);
  if (!children || !children.length) return;
  for (const child of children) {
    const node = createTreeNode(parentPath, child);
    container.appendChild(node);
  }
}

// 选中节点 → 页面上高亮
async function selectNode(selector, rowEl) {
  // 高亮行
  explorerTree.querySelectorAll('.tree-node.selected').forEach(n => n.classList.remove('selected'));
  if (rowEl) rowEl.classList.add('selected');

  selectedNodeSelector = selector;
  explorerSelected.textContent = selector;

  // 在 Discord 页面上绘制高亮框
  await highlightElement(selector);
}

async function highlightElement(selector) {
  const code = `
    (function(){
      let box = document.getElementById('__explorer_highlight');
      if (!box) {
        box = document.createElement('div');
        box.id = '__explorer_highlight';
        box.style.cssText = 'position:fixed;pointer-events:none;z-index:999998;border:3px solid #e94560;border-radius:4px;background:rgba(233,69,96,0.12);transition:all 0.15s ease;';
        document.body.appendChild(box);
      }
      let tag = document.getElementById('__explorer_tag');
      if (!tag) {
        tag = document.createElement('div');
        tag.id = '__explorer_tag';
        tag.style.cssText = 'position:fixed;z-index:999999;pointer-events:none;background:#e94560;color:#fff;font-size:11px;padding:2px 8px;border-radius:3px;font-family:Consolas,monospace;white-space:nowrap;';
        document.body.appendChild(tag);
      }
      const el = document.querySelector('${esc(selector)}');
      if (!el) { box.style.display='none'; tag.style.display='none'; return false; }
      const rect = el.getBoundingClientRect();
      box.style.left = rect.left+'px'; box.style.top = rect.top+'px';
      box.style.width = rect.width+'px'; box.style.height = rect.height+'px';
      box.style.display = 'block';
      tag.textContent = '${esc(selector).substring(0,60)}  ('+Math.round(rect.width)+'x'+Math.round(rect.height)+')';
      tag.style.left = Math.min(rect.left, window.innerWidth-350)+'px';
      tag.style.top = Math.max(0, rect.top-24)+'px';
      tag.style.display = 'block';
      return true;
    })()`;
  await window.discordBot.executeInDiscord(code);
}

async function clearHighlight() {
  await window.discordBot.executeInDiscord(`
    (function(){
      document.getElementById('__explorer_highlight')?.remove();
      document.getElementById('__explorer_tag')?.remove();
    })()`);
}

// 复制按钮
document.getElementById('btn-explorer-copy').addEventListener('click', () => {
  if (selectedNodeSelector) {
    navigator.clipboard.writeText(selectedNodeSelector);
    log(t('log_explorer_copied', selectedNodeSelector), 'pick');
  }
});

// ================================================================
//  自动化主循环
// ================================================================
let running = false, mainTimer = null, subTimer = null;
let currentActivity = 'idle'; // idle | adventure | crafting | battle

function setDot(mod, on) { document.getElementById(`dot-${mod}`).classList.toggle('running', on); }

// ========== 随机延迟工具 ==========
function getRandomDelay(mod) {
  const min = parseInt(document.getElementById(`${mod}-delay-min`).value) || 0;
  const max = parseInt(document.getElementById(`${mod}-delay-max`).value) || 0;
  if (max <= min) return min;
  return min + Math.floor(Math.random() * (max - min + 1));
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ========== DOM 操作代码生成 ==========
function buildCheckCode(selector) {
  return `(function(){
    const el = document.querySelector('${esc(selector)}');
    if (!el) return { exists:false, clickable:false };
    const r = el.getBoundingClientRect();
    if (r.width<=0||r.height<=0) return { exists:false, clickable:false };
    const s = getComputedStyle(el);
    const bad = parseFloat(s.opacity)<0.5 || s.pointerEvents==='none' || s.filter.includes('grayscale')
      || el.hasAttribute('disabled') || el.closest('[class*="cooldown"],[class*="Cooldown"],[class*="disabled"],[class*="Disabled"]');
    return { exists:true, clickable:!bad };
  })()`;
}

function buildClickCode(selector) {
  return `(function(){
    const el = document.querySelector('${esc(selector)}');
    if (!el) return false;
    el.click();
    el.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));
    el.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));
    return true;
  })()`;
}

function buildExistsCheck(sel) {
  return `(function(){ const el = document.querySelector('${esc(sel)}'); return el ? { exists:true, w: el.getBoundingClientRect().width } : { exists:false }; })()`;
}

// ========== 主循环 ==========
let battleBtnGone = false; // 进入战斗后，战斗按钮是否已经消失过（状态驱动替代硬编码宽限期）
let mainLoopBusy = false; // 防止并发重入

async function mainLoop() {
  if (!running) return;
  if (mainLoopBusy) return;
  mainLoopBusy = true;
  try { await _mainLoop(); } finally { mainLoopBusy = false; }
}

async function _mainLoop() {

  try {
    // ---- 全局：自动返回弹窗检测（最高优先级） ----
    const autoReturnOn = document.getElementById('chk-autoreturn').checked;
    const autoReturnSel = document.getElementById('autoreturn-btn').value;
    if (autoReturnOn && autoReturnSel) {
      const st = await window.discordBot.executeInDiscord(buildExistsCheck(autoReturnSel));
      if (st && st.exists && st.w > 0) {
        const prevActivity = currentActivity;
        await window.discordBot.executeInDiscord(buildClickCode(autoReturnSel));
        log(t('log_return_popup'));
        setDot('autoreturn', true);
        setTimeout(() => setDot('autoreturn', false), 1500);

        // 等弹窗消失
        await sleep(500);

        // 检测是否还在原来的活动界面中
        const craftingContainerSel = document.getElementById('crafting-container').value;
        const battleCircleSel = document.getElementById('battle-selector').value;

        if (prevActivity === 'crafting' && craftingContainerSel) {
          const r = await window.discordBot.executeInDiscord(buildExistsCheck(craftingContainerSel));
          if (r && r.exists) {
            log(t('log_return_crafting'));
            // subTimer 还在跑，不做任何事
            return;
          }
        }
        if (prevActivity === 'battle' && battleCircleSel) {
          const r = await window.discordBot.executeInDiscord(buildExistsCheck(battleCircleSel));
          if (r && r.exists) {
            log(t('log_return_battle'));
            return;
          }
        }
        if (prevActivity === 'healer') {
          const r = await window.discordBot.executeInDiscord(`(function(){ return !!document.querySelector('.grid__0dcd3'); })()`);
          if (r) {
            log(t('log_return_healer'));
            return;
          }
        }
        if (prevActivity === 'warrior') {
          const r = await window.discordBot.executeInDiscord(`(function(){ return !!document.querySelector('.shield_cce732'); })()`);
          if (r) {
            log(t('log_return_warrior'));
            return;
          }
        }

        // 不在原活动中了，重置到 idle 让主循环重新判断
        switchActivity('idle');
        return;
      }
    }
  } catch (e) { /* 不影响后续逻辑 */ }

  const craftingOn = document.getElementById('chk-crafting').checked;
  const battleOn = document.getElementById('chk-battle').checked;
  const adventureOn = document.getElementById('chk-adventure').checked;

  const craftingBtnSel = document.getElementById('crafting-btn').value;
  const battleBtnSel = document.getElementById('battle-btn').value;
  const adventureBtnSel = document.getElementById('adventure-btn').value;
  const craftingContainerSel = document.getElementById('crafting-container').value;

  try {
    // ---- 如果当前在制作中 ----
    if (currentActivity === 'crafting') {
      // 检测制作结束按钮
      const craftFinishSel = document.getElementById('crafting-finish').value;
      if (craftFinishSel) {
        const fst = await window.discordBot.executeInDiscord(buildExistsCheck(craftFinishSel));
        if (fst && fst.exists && fst.w > 0) {
          await window.discordBot.executeInDiscord(buildClickCode(craftFinishSel));
          log(t('log_craft_finish_click'));
          // 点完结束按钮后等一下让界面切换
          await sleep(500);
          switchActivity('idle');
          // 立刻往下走，检测下一个活动
        }
      }
      // 制作界面还在就继续
      if (currentActivity === 'crafting') {
        if (craftingContainerSel) {
          const r = await window.discordBot.executeInDiscord(buildExistsCheck(craftingContainerSel));
          if (r && r.exists) return; // 还在制作中
        }
        // 制作界面消失了
        log(t('log_craft_ended'));
        switchActivity('idle');
      }
    }

    // ---- 如果当前在战斗中（射手/牧师/骑士） ----
    if (currentActivity === 'battle' || currentActivity === 'healer' || currentActivity === 'warrior') {
      // 检测战斗结束按钮
      const finishSel = document.getElementById('battle-finish').value;
      if (finishSel) {
        const finishSt = await window.discordBot.executeInDiscord(buildExistsCheck(finishSel));
        if (finishSt && finishSt.exists && finishSt.w > 0) {
          const nameMap = { healer: 'log_name_healer', warrior: 'log_name_warrior', battle: 'log_name_archer' };
          await window.discordBot.executeInDiscord(buildClickCode(finishSel));
          log(t('log_battle_finish_click', t(nameMap[currentActivity] || 'log_name_archer')));
          await sleep(500);
          switchActivity('idle');
        }
      }
      // 检测战斗入口按钮是否重新出现 = 回到主界面
      // 状态驱动：必须先确认按钮已消失，再出现才算战斗结束
      if (currentActivity === 'battle' || currentActivity === 'healer' || currentActivity === 'warrior') {
        const btnBack = await window.discordBot.executeInDiscord(buildCheckCode(battleBtnSel));
        if (btnBack && btnBack.exists && btnBack.clickable) {
          if (battleBtnGone) {
            // 按钮曾消失过，现在重新出现 = 真正结束
            log(t('log_battle_ended'));
            switchActivity('idle');
          } else {
            // 按钮还没消失过（刚进入，UI 还在切换），继续等
            return;
          }
        } else {
          // 按钮不可见 = 确认已进入战斗界面
          battleBtnGone = true;
          return; // 还在战斗中
        }
      }
    }

    // ---- 优先级 1: 制作 ----
    if (craftingOn && craftingBtnSel) {
      const st = await window.discordBot.executeInDiscord(buildCheckCode(craftingBtnSel));
      if (st && st.exists && st.clickable) {
        log(t('log_craft_ready'));
        await window.discordBot.executeInDiscord(buildClickCode(craftingBtnSel));
        switchActivity('crafting');
        return;
      }
    }

    // ---- 优先级 2: 战斗（自动检测射手/牧师） ----
    if (battleOn && battleBtnSel) {
      const st = await window.discordBot.executeInDiscord(buildCheckCode(battleBtnSel));
      if (st && st.exists && st.clickable) {
        log(t('log_battle_ready'));
        await window.discordBot.executeInDiscord(buildClickCode(battleBtnSel));
        currentActivity = 'battle'; // 立即标记，防止并发 mainLoop 切走
        battleBtnGone = false;
        await sleep(600); // 等界面加载
        // 检测是牧师（翻牌网格）、骑士（盾牌+火球）还是射手（圆圈）
        const modeCheck = await window.discordBot.executeInDiscord(
          `(function(){
            if (document.querySelector('.grid__0dcd3')) return 'healer';
            if (document.querySelector('.shield_cce732')) return 'warrior';
            return 'battle';
          })()`
        );
        if (modeCheck === 'healer') {
          log(t('log_healer_detected'));
          switchActivity('healer');
        } else if (modeCheck === 'warrior') {
          log(t('log_warrior_detected'));
          switchActivity('warrior');
        } else {
          log(t('log_archer_detected'));
          switchActivity('battle');
        }
        return;
      }
    }

    // ---- 优先级 3: 冒险连点 ----
    if (adventureOn && adventureBtnSel) {
      if (currentActivity !== 'adventure') {
        log(t('log_adventure_start'));
        switchActivity('adventure');
      }
    }
  } catch (e) { logOnce(t('log_error', e), 'error'); }
}

// ========== 活动切换 ==========
function switchActivity(activity) {
  if (subTimer) { clearInterval(subTimer); clearTimeout(subTimer); subTimer = null; }
  currentActivity = activity;
  if (activity === 'battle' || activity === 'healer' || activity === 'warrior') {
    battleBtnGone = false;
  }
  lastCraftingKeys = '';
  craftingBusy = false;
  healerBusy = false;
  battleBusy = false;
  warriorBusy = false;
  setDot('adventure', activity === 'adventure');
  setDot('crafting', activity === 'crafting');
  setDot('battle', activity === 'battle' || activity === 'healer' || activity === 'warrior');
  setDot('healer', activity === 'healer');
  setDot('warrior', activity === 'warrior');

  if (activity === 'adventure') {
    const btnSel = document.getElementById('adventure-btn').value;
    const baseInterval = parseInt(document.getElementById('adventure-interval').value) || 100;
    if (btnSel) {
      // 使用递归 setTimeout 实现随机间隔
      function adventureLoop() {
        if (!running || currentActivity !== 'adventure') return;
        window.discordBot.executeInDiscord(buildClickCode(btnSel)).catch(e => logOnce(t('log_adventure_error', e), 'error'));
        const delay = baseInterval + getRandomDelay('adventure');
        subTimer = setTimeout(adventureLoop, delay);
      }
      adventureLoop();
    }
  } else if (activity === 'crafting') {
    const interval = parseInt(document.getElementById('crafting-interval').value) || 50;
    subTimer = setInterval(() => craftingTick(), interval);
  } else if (activity === 'battle') {
    const circleSel = document.getElementById('battle-selector').value;
    const interval = parseInt(document.getElementById('battle-interval').value) || 50;
    if (circleSel) {
      subTimer = setInterval(() => battleTick(circleSel), interval);
    }
  } else if (activity === 'healer') {
    const interval = parseInt(document.getElementById('healer-interval').value) || 50;
    subTimer = setInterval(() => healerTick(), interval);
  } else if (activity === 'warrior') {
    const interval = parseInt(document.getElementById('warrior-interval').value) || 50;
    subTimer = setInterval(() => warriorTick(), interval);
  }
}

// ========== 制作 tick ==========
let lastCraftingKeys = '';
let craftingBusy = false; // 防止重入（因为有 await sleep）

async function craftingTick() {
  if (craftingBusy) return;
  const code = `(function(){
    const imgs = document.querySelectorAll('.sequences__34527 .character__34527 img');
    if (!imgs.length) return null;
    const keys = [];
    for (const img of imgs) {
      const alt = img.getAttribute('alt') || '';
      if (alt) keys.push(alt);
    }
    return keys;
  })()`;
  try {
    const keys = await window.discordBot.executeInDiscord(code);
    if (!keys || !keys.length) return;

    const fingerprint = keys.join(',');
    if (fingerprint === lastCraftingKeys) return;
    lastCraftingKeys = fingerprint;

    craftingBusy = true;
    const dirLabel = { ArrowUp: 'Up', ArrowDown: 'Down', ArrowLeft: 'Left', ArrowRight: 'Right' };

    // 依次按下方向键，每个键之间加随机延迟
    for (let i = 0; i < keys.length; i++) {
      if (!running || currentActivity !== 'crafting') break;
      const key = keys[i];
      if (dirLabel[key]) {
        if (i > 0) {
          const delay = getRandomDelay('crafting');
          if (delay > 0) await sleep(delay);
        }
        await window.discordBot.keypressInDiscord(key);
      }
    }
    log(t('log_craft_keys', keys.map(k => dirLabel[k] || k).join(' ')));
    craftingBusy = false;
  } catch (e) { craftingBusy = false; logOnce(t('log_craft_error', e), 'error'); }
}

// ========== 战斗 tick ==========
let battleBusy = false;
async function battleTick(selector) {
  if (battleBusy) return;
  battleBusy = true;
  const code = `(function(){
    const circles = document.querySelectorAll('${esc(selector)}');
    const targets = [];
    for (const c of circles) {
      const r = c.getBoundingClientRect();
      if (r.width<=0||r.height<=0) continue;
      const x = Math.round(r.x+r.width/2), y = Math.round(r.y+r.height/2);
      c.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,clientX:x,clientY:y}));
      c.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,clientX:x,clientY:y}));
      c.click();
      c.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,clientX:x,clientY:y}));
      c.dispatchEvent(new MouseEvent('mouseup',{bubbles:true,clientX:x,clientY:y}));
      targets.push({x,y});
    }
    return targets;
  })()`;
  try {
    const targets = await window.discordBot.executeInDiscord(code);
    if (targets && targets.length) {
      for (const tgt of targets) {
        await window.discordBot.clickInDiscord(tgt.x, tgt.y);
        // 每次点击后随机延迟
        const delay = getRandomDelay('battle');
        if (delay > 0) await sleep(delay);
      }
      logOnce(t('log_battle_hit', targets.length));
    }
    battleBusy = false;
  } catch (e) { battleBusy = false; logOnce(t('log_battle_error', e), 'error'); }
}

// ========== 牧师翻牌 tick ==========
let healerBusy = false;

async function healerTick() {
  if (healerBusy) return;
  healerBusy = true;
  try {
    // 1. 扫描所有卡牌，读取正面 SVG 指纹，按指纹分组
    const scanCode = `(function(){
      const items = document.querySelectorAll('.gridItem__0dcd3');
      if (!items.length) return null;
      const cards = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const r = item.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0) continue;
        // 检查是否已被消除（不可见或已移除）
        const style = getComputedStyle(item);
        if (style.visibility === 'hidden' || style.display === 'none' || parseFloat(style.opacity) < 0.1) continue;
        // 读取正面 SVG 指纹
        const front = item.querySelector('.gridAssetFront__0dcd3');
        if (!front) continue;
        const path = front.querySelector('path');
        const fingerprint = path ? path.getAttribute('d').substring(0, 60) : '';
        if (!fingerprint) continue;
        // 检查背面是否还显示（未翻开）= transform 不含 matrix3d 或 back 可见
        const back = item.querySelector('.gridAssetBack__0dcd3');
        const backTransform = back ? getComputedStyle(back).transform : '';
        const isFlipped = backTransform.includes('matrix3d'); // 背面被翻走 = 已翻开
        cards.push({
          index: i,
          x: Math.round(r.x + r.width / 2),
          y: Math.round(r.y + r.height / 2),
          fingerprint,
          isFlipped
        });
      }
      return cards;
    })()`;

    const cards = await window.discordBot.executeInDiscord(scanCode);
    if (!cards || cards.length === 0) { healerBusy = false; return; }

    // 按指纹分组
    const groups = {};
    for (const card of cards) {
      if (!groups[card.fingerprint]) groups[card.fingerprint] = [];
      groups[card.fingerprint].push(card);
    }

    // ��到还有 3 张未翻开的组
    for (const [fp, group] of Object.entries(groups)) {
      const unflipped = group.filter(c => !c.isFlipped);
      if (unflipped.length >= 3) {
        // 依次点击这 3 张牌
        log(t('log_healer_match', unflipped.length));
        for (let i = 0; i < 3; i++) {
          if (!running || currentActivity !== 'healer') break;
          const card = unflipped[i];

          // 在 Discord 中点击该卡牌
          await window.discordBot.executeInDiscord(`(function(){
            const items = document.querySelectorAll('.gridItem__0dcd3');
            const el = items[${card.index}];
            if (!el) return;
            el.click();
            const r = el.getBoundingClientRect();
            const x = r.x + r.width/2, y = r.y + r.height/2;
            el.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,clientX:x,clientY:y}));
            el.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,clientX:x,clientY:y}));
            el.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,clientX:x,clientY:y}));
            el.dispatchEvent(new MouseEvent('mouseup',{bubbles:true,clientX:x,clientY:y}));
          })()`);
          // 同时用 Chromium 级别点击
          await window.discordBot.clickInDiscord(card.x, card.y);

          if (i < 2) {
            const delay = getRandomDelay('healer');
            if (delay > 0) await sleep(delay);
          }
        }
        logOnce(t('log_healer_flip_done'));
        // 等牌消除动画
        await sleep(800);
        healerBusy = false;
        return;
      }
    }

    // 没找到可翻的组（可能都已消除）
    healerBusy = false;
  } catch (e) { healerBusy = false; logOnce(t('log_healer_error', e), 'error'); }
}

// ========== 骑士接物 tick ==========
let warriorBusy = false;
async function warriorTick() {
  if (warriorBusy) return;
  warriorBusy = true;
  const code = `(function(){
    const shield = document.querySelector('.shield_cce732');
    if (!shield) return null;
    const sr = shield.getBoundingClientRect();

    const projs = document.querySelectorAll('.projectile_cce732');
    if (!projs.length) return null;

    let best = null;
    for (const p of projs) {
      const r = p.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) continue;
      const py = r.y + r.height; // 掉落物底部 y
      // 只关注还没超过盾牌的（底部 y < 盾牌底部 y + 余量）
      if (py > sr.y + sr.height + 50) continue;
      // 选离盾牌最近的（top 最大 = 掉得最低）
      if (!best || r.y > best.y) {
        best = { x: Math.round(r.x + r.width / 2), y: Math.round(r.y) };
      }
    }
    if (!best) return null;
    return { targetX: best.x, shieldY: Math.round(sr.y + sr.height / 2) };
  })()`;
  try {
    const result = await window.discordBot.executeInDiscord(code);
    if (result && result.targetX) {
      await window.discordBot.mousemoveInDiscord(result.targetX, result.shieldY);
    }
    warriorBusy = false;
  } catch (e) { warriorBusy = false; logOnce(t('log_warrior_error', e), 'error'); }
}

// ========== 启动 / 停止 ==========
function startAll() {
  running = true; currentActivity = 'idle';
  const btn = document.getElementById('btn-start');
  btn.innerHTML = I18N[currentLang].btn_stop; btn.classList.add('running');
  mainTimer = setInterval(mainLoop, 500);
  mainLoop();
  const mods = [];
  if (document.getElementById('chk-adventure').checked) mods.push(t('log_mod_adventure'));
  if (document.getElementById('chk-crafting').checked) mods.push(t('log_mod_crafting'));
  if (document.getElementById('chk-battle').checked) mods.push(t('log_mod_battle'));
  if (!mods.length) { log(t('log_no_features'), 'error'); stopAll(); return; }
  log(t('log_started', mods.join(' + ')));
}

function stopAll() {
  running = false; currentActivity = 'idle';
  if (mainTimer) { clearInterval(mainTimer); mainTimer = null; }
  if (subTimer) { clearInterval(subTimer); subTimer = null; }
  ['adventure','crafting','battle','healer'].forEach(m => setDot(m, false));
  const btn = document.getElementById('btn-start');
  btn.innerHTML = I18N[currentLang].btn_start; btn.classList.remove('running');
  log(t('log_stopped'), 'warn');
}

document.getElementById('btn-start').addEventListener('click', () => running ? stopAll() : startAll());
document.getElementById('btn-refresh').addEventListener('click', () => {
  window.discordBot.navigateDiscord('https://discord.com/channels/@me');
  log(t('log_refreshed'));
});

// ========== 初始化：加载配置 ==========
(async function init() {
  const config = await window.discordBot.loadConfig();
  if (config) {
    applyConfig(config);
    log(t('log_config_loaded'));
  }
  // 标记有值的 input
  document.querySelectorAll('.picker-group input').forEach(i => { if (i.value) i.classList.add('has-value'); });
  // 启动自动保存
  setupAutoSave();

  log(t('log_ready'));
})();
