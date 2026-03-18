<template>
  <canvas ref="canvasRef" width="300" height="150"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { drawDebugGrid } from '@/util/drawDebugGrid';
import { drawRotateDebugLine } from '@/util/drawRotateDebugLine';
const canvasRef = ref(null);

function drawCanvas () {
  const ctx = canvasRef.value.getContext("2d");
  // 在这里添加绘制逻辑
  // 1. 先画旋转辅助线（调试用）
  const rotateCenterX = 0; // 旋转中心X
  const rotateCenterY = 0; // 旋转中心Y
  const rotateAngle = 25;   // 旋转角度（30度）
  drawRotateDebugLine(ctx, rotateCenterX, rotateCenterY, rotateAngle)
  // left rectangles, rotate from canvas origin
  ctx.save();
  // blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  // const rotateCenterX = 200; // 旋转中心X
  // const rotateCenterY = 80; // 旋转中心Y
  // const rotateAngle = 30;    // 旋转角度（30度）
  
  ctx.save()
  ctx.translate(200, 80); // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // rotate
  ctx.translate(-200, -80); // translate back
  // draw grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
  ctx.restore()
  drawDebugGrid(canvasRef.value, ctx)
  drawRotateDebugLine(ctx, 200, 80, rotateAngle)
}

onMounted(() => {
  drawCanvas()
})
</script>