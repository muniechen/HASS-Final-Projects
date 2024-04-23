document.addEventListener('DOMContentLoaded', function() {
    // 为所有带有 href 属性的 <a> 标签添加点击事件处理程序
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认行为，即阻止 <a> 标签的链接行为

            const targetId = this.hash.substring(1); // 获取目标元素的 id
            const target = document.getElementById(targetId); // 根据 id 获取目标元素

            if (target) {
                // 使用 scrollIntoView 方法将页面滚动到目标元素的位置
                target.scrollIntoView({
                    behavior: 'smooth' // 平滑滚动效果
                });
            }
        });
    });
});