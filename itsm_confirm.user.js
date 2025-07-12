// ==UserScript==
// @name         itsm_confirm
// @namespace    蓝鲸ITSM
// @version      0.5
// @description  蓝鲸ITSM智能确认弹窗。
// @author       chalot
// @match        https://*/o/bk_itsm*
// @match        https://*/o/bk_itsm/*
// @icon         http://
// @grant        none
// @downloadURL  https://github.com/chalot-cmd/userjs/raw/refs/heads/main/itsm_confirm.user.js
// @updateURL    https://github.com/chalot-cmd/userjs/raw/refs/heads/main/itsm_confirm.user.js
// ==/UserScript==

(function() {
    'use strict';

    // 精准识别确认按钮的函数
    function clickConfirmBtn() {
        // 精确选择器：在对话框底部区域寻找确认按钮
        const confirmBtn = document.querySelector('.bk-dialog-footer > .footer-wrapper > .bk-primary.bk-button-normal.bk-button:not(.footer-buttons)');
        console.log(confirmBtn);
        if (confirmBtn ) {
            console.log('找到确认按钮，正在自动点击...');
            confirmBtn.click();
            return true;
        }
        return false;
    }

    // 方法1：立即尝试点击（适用于弹窗已存在）
    if (!clickConfirmBtn()) {
        // 方法2：观察DOM变化（适用于动态加载的弹窗）
        const observer = new MutationObserver(function(mutations) {
            // 检查每次DOM变化时确认按钮是否出现
            clickConfirmBtn();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class'] // 特别关注样式和类名变化
        });

        // 方法3：额外保险的定时检查（可选）
        const intervalId = setInterval(() => {
            if (clickConfirmBtn()) {
                clearInterval(intervalId);
                //observer.disconnect();
            }
        }, 300);
    }

    // 添加点击前的确认逻辑（可选安全措施）
    window.addEventListener('click', function(e) {
        if (e.target.name === 'confirm' && e.target.classList.contains('bk-primary')) {
            console.log('用户手动点击了确认按钮');
            // 可以在这里添加日志记录等操作
        }
    }, true);
})();
