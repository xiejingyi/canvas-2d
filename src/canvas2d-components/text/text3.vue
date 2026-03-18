<template>
  <canvas ref="canvasRef" width="300" height="200"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);

function drawCanvas3 () {
  const ctx = canvasRef.value.getContext("2d");
  // 设置不同基线效果
  const baselineTypes = [
    'top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'
  ];
  baselineTypes.forEach((baseline, i) => {
    ctx.textBaseline = baseline;
    ctx.fillText(baseline, 50, 10 + i * 30);

    // 画参考线
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(40, 10 + i * 30);  // y坐标相同！
    ctx.lineTo(150,10 + i * 30);
    ctx.stroke();
  });
   // 画一个中心点
  ctx.fillStyle = 'red';
  ctx.fillRect(150, 100, 3, 3);  // 中心点(150,100)

   // 设置对齐方式
  ctx.textAlign = 'center';  // 文本水平居中
  ctx.textBaseline = 'middle';  // 文本垂直居中
  ctx.font = '20px Arial';

   // 现在(150,100)就是文本的中心点！
  ctx.fillText('Center', 150, 100);
}
onMounted(() => {
  drawCanvas3()
})
</script>
<style lang="scss" scoped>
</style>