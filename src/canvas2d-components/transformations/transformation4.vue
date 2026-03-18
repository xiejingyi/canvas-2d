<template>
  <canvas ref="canvasRef" width="150" height="150"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);

function drawCanvas () {
  const ctx = canvasRef.value.getContext("2d");
  // 在这里添加绘制逻辑
  // draw a simple rectangle, but scale it.
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // mirror horizontally
  ctx.scale(-1, 1);
  ctx.font = "48px serif";
  ctx.fillText("MDN", -135, 120);
}

onMounted(() => {
  drawCanvas()
})
</script>