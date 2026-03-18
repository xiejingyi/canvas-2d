<template>
  <canvas ref="canvasRef" width="300" height="300"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);
function draw () {
  const ctx = canvasRef.value.getContext("2d");
  let x = 150;
  let y = 150;
  let radius = 20;
  let angle = 0;

  function animate() {
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height); // 清除画布

    // 更新位置
    x = 150 + Math.cos(angle) * 100; // 圆周运动
    y = 150 + Math.sin(angle) * 100;
    angle += 0.02; // 增加角度以产生动画效果

    // 绘制球
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(animate); // 请求下一帧动画
  }
  animate(); // 启动动画
}
onMounted(() => {
    draw(); // 启动动画
  })
</script>