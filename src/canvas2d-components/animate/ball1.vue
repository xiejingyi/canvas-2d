<template>
  <canvas ref="canvasRef" width="500" height="300"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);
let canvas = null
let ctx = null
let raf = null
const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布

  // 更新位置
  ball.x += ball.vx;
  ball.y += ball.vy;

  // 碰撞检测
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.vx = -ball.vx; // 水平反弹
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.vy = -ball.vy; // 垂直反弹
  }

  // 绘制球
  ball.draw();

  raf = requestAnimationFrame(draw); // 请求下一帧动画
}
onMounted(() => {
  canvas = canvasRef.value;
  ctx = canvas.getContext("2d");
  ball.draw(); // 初始绘制球
  canvas.addEventListener('mouseover', () => {
    if (!raf) {
      draw(); // 启动动画
    }
  });
  canvas.addEventListener('mouseout', () => {
    if (raf) {
      cancelAnimationFrame(raf); // 停止动画
      raf = null;
    }
  });
  // draw(); // 启动动画
})
</script>