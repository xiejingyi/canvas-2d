<template>
  <canvas id="canvas4" width="200" height="200"></canvas>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const canvasRef = ref(null);
function drawCanvas4 () {
  const canvas4 = document.getElementById("canvas4")
  const ctx = canvas4.getContext("2d");
  ctx.fillStyle = 'red'
  ctx.globalAlpha = '0.1'
  ctx.fillRect(0, 0, canvas4.width, canvas4.height)
  ctx.globalAlpha = 1
  // 使用
  const label = new TextLabel('点击这里', 100, 100);
  label.draw(ctx);
}

class TextLabel {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = '#000';
    this.font = '16px Arial';
    this.bgColor = 'rgba(255,255,255,0.8)';
    this.padding = 5;
  }
  
  draw (ctx) {
    ctx.font = this.font;
    const metrics = ctx.measureText(this.text);
    const width = metrics.width + this.padding * 2;
    const height = parseInt(this.font) + this.padding * 2;
    console.log(this.x - width/2, this.y - height/2, width, height)
    // 2. 绘制背景
    ctx.fillStyle = this.bgColor;
    ctx.fillRect(
      this.x - width/2,  // 中心对齐
      this.y - height/2, // 中心对齐
      width,
      height
    );
    
    // 3. 绘制文本
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
  }
}
onMounted(() => {
  drawCanvas4()
})
</script>