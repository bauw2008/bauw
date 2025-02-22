// 获取刮刮卡和覆盖层
const scratchCard = document.querySelector('.scratch-card');
const scratchOverlay = document.querySelector('.scratch-overlay');
const hiddenContent = document.querySelector('.hidden-content');

// 添加事件监听器来处理刮刮动作
scratchOverlay.addEventListener('mousemove', (e) => {
    const offset = scratchOverlay.getBoundingClientRect();
    const mouseX = e.clientX - offset.left;
    const mouseY = e.clientY - offset.top;

    const ctx = scratchOverlay.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out'; // 刮掉覆盖层
    ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2, false);
    ctx.fill();
});

scratchOverlay.addEventListener('mousedown', () => {
    scratchCard.classList.add('scratch-active');
});
