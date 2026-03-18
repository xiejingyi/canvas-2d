<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-2">
      <canvas ref="canvasRef" width="150" height="150"></canvas>
      <canvas ref="canvas2Ref" width="150" height="150"></canvas>
      <canvas ref="canvas3Ref" width="150" height="150"></canvas>
      <canvas ref="canvas4Ref" width="150" height="150"></canvas>
      <canvas ref="canvas5Ref" width="150" height="150"></canvas>
      <canvas ref="canvas7Ref" width="150" height="150"></canvas>
      <canvas ref="canvas8Ref" width="150" height="150"></canvas>
      <canvas ref="canvas9Ref" width="150" height="150"></canvas>
      <canvas ref="canvas10Ref" width="150" height="150"></canvas>
    </div>
    <div>
      <canvas ref="canvas6Ref" width="150" height="200"></canvas>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
// Canvas 元素引用
const canvasRef = ref(null);
const canvas2Ref = ref(null);
const canvas3Ref = ref(null);
const canvas4Ref = ref(null);
const canvas5Ref = ref(null);
const canvas6Ref = ref(null);
const canvas7Ref = ref(null);
const canvas8Ref = ref(null);
const canvas9Ref = ref(null);
const canvas10Ref = ref(null);
function draw(){
  const canvas = canvasRef.value;
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
  }
}
function drawCanvas2() {
  const canvas = canvas2Ref.value;
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.fillRect(25, 25, 100, 100)
    ctx.clearRect(45, 45, 60, 60)
    ctx.strokeRect(50, 50, 50, 50)
  }
}

function drawCanvas3 () {
  const canvas = canvas3Ref.value;
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(50,50)
    ctx.lineTo(100,75)
    ctx.lineTo(100,25)
    ctx.fill()
  }
}
function drawCanvas4 () {
  const canvas = canvas4Ref.value;
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.arc(75, 75, 50, 0, Math.PI*2, true)
    ctx.moveTo(110, 75)
    ctx.arc(75, 75, 35, 0, Math.PI, false)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.moveTo(65, 65)
    ctx.arc(60, 65, 8, 0, Math.PI*2, true)
    ctx.moveTo(95, 65)
    ctx.arc(90, 65, 8, 0, Math.PI*2, true)
    ctx.fill()
  }
}
function drawCanvas5 () {
  const canvas = canvas5Ref.value;
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d')
    //填充三角形
    ctx.beginPath()
    ctx.moveTo(25, 25)
    ctx.lineTo(105, 25)
    ctx.lineTo(25, 105)
    ctx.fill()
    
    //描边三角形
    ctx.beginPath()
    ctx.moveTo(125, 125)
    ctx.lineTo(125, 45)
    ctx.lineTo(45, 125)
    ctx.closePath()
    ctx.stroke()
  }
}
function drawCanvas6() {
  const canvas = canvas6Ref.value;
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    for (let i = 0; i < 4; i++) {
      for(let j = 0; j < 3; j++) {
        ctx.beginPath()
        let x = 25 + j * 50 // x坐标值
        let y = 25 + i * 50 // y坐标值
        const redius = 20
        const startAngle = 0
        const endAngle = Math.PI + (Math.PI * j) / 2
        const anticlockwise = i % 2 === 0 ? false : true
        
        ctx.arc(x, y, redius, startAngle, endAngle, anticlockwise)
        if (i > 1) {
          ctx.fill()
        } else {
          ctx.stroke()
        }
      }
    }
  }
}
function drawCanvas7 () {
  const canvas = canvas7Ref.value;
  if (!canvas.getContext) return
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(75, 25)
  ctx.quadraticCurveTo(25, 25, 25, 62.5)
  ctx.quadraticCurveTo(25, 100, 50, 100)
  ctx.quadraticCurveTo(50, 120, 30, 125)
  ctx.quadraticCurveTo(60, 120, 65, 100)
  ctx.quadraticCurveTo(125, 100, 125, 62.5)
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke()
}
function drawCanvas8 () {
  const canvas = canvas8Ref.value;
  if (!canvas.getContext) return
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(75, 40)
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill()
}

function drawCanvas9 () {
  const canvas = canvas9Ref.value;
  if(!canvas.getContext) return
  const ctx = canvas.getContext('2d')
  roundedRect(ctx, 12, 12, 150, 150, 15);
  roundedRect(ctx, 19, 19, 150, 150, 9);
  roundedRect(ctx, 53, 53, 49, 33, 10);
  roundedRect(ctx, 53, 119, 49, 16, 6);
  roundedRect(ctx, 135, 53, 49, 33, 10);
  roundedRect(ctx, 135, 119, 25, 49, 10);
  
  ctx.beginPath()
  ctx.arc(37, 37, 13, Math.PI / 8, -Math.PI / 8, false)
  ctx.lineTo(31, 37)
  ctx.fill()
  
  for (let i = 0; i< 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4 )
  }
  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }
  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }
  
  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill()
  
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();
  
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
}
// 封装的一个用于绘制圆角矩形的函数。
function roundedRect (ctx, x, y, width, height, radius) {
  ctx.beginPath()
  ctx.moveTo(x, y + radius)
  ctx.lineTo(x, y + height - radius)
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height)
  ctx.lineTo(x + width - radius, y + height)
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
  ctx.lineTo(x + width, y + radius)
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
  ctx.lineTo(x+radius, y)
  ctx.quadraticCurveTo(x, y, x, y + radius)
  ctx.stroke()
  
}


function drawCanvas10 () {
  const canvas = canvas10Ref.value;
  if(!canvas.getContext) return
  const ctx = canvas.getContext('2d')
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50);
  
  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, Math.PI*2, false)
  
  ctx.stroke(rectangle)
  ctx.fill(circle)
}

// 挂载后初始化
onMounted(() => {
  draw()
  drawCanvas2()
  drawCanvas3()
  drawCanvas4()
  drawCanvas5()
  drawCanvas6()
  drawCanvas7()
  drawCanvas8()
  drawCanvas9()
  drawCanvas10()
});
</script>
<style lang="scss" scoped>
canvas {
  border: 1px rgb(156, 154, 154) solid;
  vertical-align: top;
}
</style>