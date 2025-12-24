// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 生成二维码
    generateQRCode();
});

// 生成微信二维码
function generateQRCode() {
    // 创建二维码实例
    var qrcode = new QRCode("qrcode", {
        text: "https://yinliu.dinglixz.com/common/kf/?kid=101845#MTc2NjU4NTg0MQ==",
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

// 复制微信号到剪贴板
function copyWechatId() {
    const wechatId = 'TTMEEL';
    
    // 创建临时输入框
    const tempInput = document.createElement('input');
    tempInput.value = wechatId;
    document.body.appendChild(tempInput);
    
    // 选择并复制文本
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // 兼容移动设备
    
    try {
        document.execCommand('copy');
        
        // 显示复制成功提示
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '已复制！';
        copyBtn.style.backgroundColor = '#27ae60';
        
        // 2秒后恢复原样
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.backgroundColor = '#3498db';
        }, 2000);
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制微信号');
    }
    
    // 移除临时输入框
    document.body.removeChild(tempInput);
}