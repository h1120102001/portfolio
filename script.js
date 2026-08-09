// 泡のアニメーション
const canvas = document.getElementById("bubbles");
const ctx = canvas.getContext("2d");

let bubbles = [];
const numBubbles = 40;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < numBubbles; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 8 + 3,
    speed: Math.random() * 0.8 + 0.2,
    opacity: Math.random() * 0.4 + 0.3,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity})`;
    ctx.fill();
    bubble.y -= bubble.speed;
    if (bubble.y < -bubble.r) {
      bubble.y = canvas.height + bubble.r;
      bubble.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}
animate();