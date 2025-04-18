// 本代码来自https://github.com/YaoqxCN/star-sky

const numStars = 300; // 星星数量
const container = document.createElement("div");
container.className = "starry-background";
document.body.appendChild(container); // 先把背景容器放进 body

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 3 + 1; // 星星大小
    const x = Math.random() * window.innerWidth; // 随机位置
    const y = Math.random() * window.innerHeight;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    container.appendChild(star); //放进容器而非 body

    // 随机动画时长
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s, ${Math.random() * 20 + 10}s`; // 设置随机时长，移动时间增大
    star.style.animationDelay = `${Math.random() * 2}s`;
}