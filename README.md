# 蓝鲸ITSM智能确认弹窗 - Tampermonkey脚本

## 🚀 功能概述
自动处理蓝鲸ITSM系统工单提交后的确认弹窗，实现一键式审批操作。

## ✨ 核心功能
- ✅ 自动识别并确认提交弹窗
- ⚡ 减少人工点击步骤
- 🔒 仅在提交按钮触发后激活

## 📥 安装指南
1. 安装Tampermonkey扩展：
   - [Chrome版](https://chrome.google.com)
   - [Firefox版](https://addons.mozilla.org)
2. 点击脚本安装链接：  
   [安装v1.0.0](https://github.com/chalot-cmd/userjs/raw/refs/heads/main/itsm_confirm.user.js) 
3. 刷新ITSM系统页面

## 🛠 使用说明
```javascript
// 示例代码片段（仅示意）
document.querySelector('.submit-btn').addEventListener('click', function(){
    autoConfirmDialog();
});
