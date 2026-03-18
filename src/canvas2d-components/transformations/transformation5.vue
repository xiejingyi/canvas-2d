<template>
  <canvas ref="canvasRef" width="300" height="300"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { drawDebugGrid } from '@/util/drawDebugGrid';
const canvasRef = ref(null);

function drawCanvas () {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  // 在这里添加绘制逻辑
  drawDebugGrid(canvas, ctx)
  const sin = Math.sin(Math.PI / 6);
  const cos = Math.cos(Math.PI / 6);
  ctx.translate(150, 150)
  
  let c = 0;
  for (let i = 0; i <= 11; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.fillStyle = 'red'
    ctx.fillText(i, 102, 9)
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }
  // ctx.fillStyle = "red"
  // ctx.fillRect(0, 0, 100, 10);
  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 0, 50, 80);
  ctx.setTransform(1,0,0,1,0,0)
  ctx.fillRect(0, 0, 50, 80);
}

onMounted(() => {
  drawCanvas()
})
</script>