<template>
  <canvas ref="canvasRef" width="150" height="150"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);

function drawCanvas () {
  const ctx = canvasRef.value.getContext("2d");
  // 在这里添加绘制逻辑
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save()
      ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 *i}, 255)`
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.font = "20px serif";
      ctx.fillStyle = '#fff'
      ctx.fillText(`${i}${j}`, 5, 20)
      ctx.restore();
    }
  }
}

onMounted(() => {
  drawCanvas()
})
</script>