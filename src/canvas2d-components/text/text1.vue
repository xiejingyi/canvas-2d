<template>
  <canvas ref="canvasRef" width="240" height="150"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);
function draw () {
  const ctx = canvasRef.value.getContext("2d");
  ctx.font = '48px serif'
  ctx.fillText('你好世界', 10, 50)
  
  ctx.beginPath();
  ctx.moveTo(10, 50);
  ctx.lineTo(300, 50);
  ctx.stroke();
  
  ctx.font = '20px Arial';

  // 1. 默认对齐（baseline: 'alphabetic'）
  ctx.fillText('Hello', 100, 100);

  // 2. 画一条基线参考线
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(50, 100);  // y = 100，与fillText的y相同！
  ctx.lineTo(200, 100);
  ctx.stroke();
}
onMounted(() => {
  draw()
})
</script>
<style lang="scss" scoped>
</style>