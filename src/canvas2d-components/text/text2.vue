<template>
  <canvas ref="canvasRef" width="240" height="150"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);

function drawCanvas2 () {
  const ctx = canvasRef.value.getContext("2d");
  ctx.font = '48px serif'
  ctx.textBaseline = "hanging";
  ctx.strokeText("hanging", 10, 50);
  
  ctx.beginPath();
  ctx.moveTo(10, 50);
  ctx.lineTo(300, 50);
  ctx.stroke();
  
  // 参考线
  ctx.beginPath();
  ctx.moveTo(10, 120);
  ctx.lineTo(300, 120);
  ctx.stroke();
  ctx.textBaseline = "middle";
  // 切换字体时需要重新考虑位置
  ctx.font = '12px Arial';
  ctx.fillText('Small', 70, 120);

  ctx.font = '24px Arial';
  // 同样的y坐标，但大字体位置会不同！
  ctx.fillText('Large', 100, 120); 
}
onMounted(() => {
  drawCanvas2()
})
</script>
<style lang="scss" scoped>
</style>