<template>
  <div>
    <div class="flex gap-2">
      <canvas ref="canvasRef" width="150" height="150"></canvas>
      <canvas ref="canvas1Ref" width="150" height="150"></canvas>
      <canvas ref="canvas2Ref" width="150" height="150"></canvas>
      <canvas ref="canvas3Ref" width="150" height="150"></canvas>
      <canvas ref="canvas4Ref" width="150" height="150"></canvas>
      <canvas ref="canvas5Ref" width="150" height="150"></canvas>
    </div>
    <div class="flex gap-2">
      <canvas ref="canvas6Ref" width="150" height="150"></canvas>
      <canvas ref="canvas8Ref" width="150" height="150"></canvas>
      <canvas ref="canvas9Ref" width="150" height="150"></canvas>
      <canvas ref="canvas10Ref" width="150" height="150"></canvas>
      <canvas ref="canvas11Ref" width="150" height="150"></canvas>
      <canvas ref="canvas12Ref" width="150" height="150"></canvas>
    </div>
    <div class="flex mt-4">
      <canvas ref="canvas7Ref" width="150" height="150"></canvas>
      <div class="miter-limit ml-4">
      <span>通过在下面输入新的值并点击重绘按钮来改变 miterLimit。</span>
      <p>Miter limit: <input type="number" ref="miterLimitRef" />
        <button ref="canvas7ButtonRef">重绘</button>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
const canvasRef = ref(null);
const canvas1Ref = ref(null);
const canvas2Ref = ref(null);
const canvas3Ref = ref(null);
const canvas4Ref = ref(null);
const canvas5Ref = ref(null);
const canvas6Ref = ref(null);
const canvas7Ref = ref(null);
const canvas8Ref = ref(null);
const canvas9Ref = ref(null);
const canvas10Ref = ref(null);
const canvas11Ref = ref(null);
const canvas12Ref = ref(null);
const miterLimitRef = ref(null);
const canvas7ButtonRef = ref(null);



function draw () {
  const ctx = canvasRef.value.getContext("2d")
  for (let i = 0; i < 6; i++) {
    for(let j = 0; j < 6; j++) {
      ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j,
      )} ${Math.floor(255 - 42.5 * j)})`;
      ctx.fillRect(j*25, i*25, 25, 25)
    }
  }
}
function drawCanvas1 () {
  const ctx = canvas1Ref.value.getContext('2d')
  for (let i = 0; i < 6; i++) {
    for(let j = 0; j < 6; j++) {
      ctx.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j,
      )})`;
      ctx.beginPath()
      ctx.arc(12.5 + j*25, 12.5 + i*25, 10 , 0, 2*Math.PI, true)
      ctx.stroke()
    }
  }
}

function drawCanvas2 () {
  const ctx = canvas2Ref.value.getContext('2d')
  // 画背景
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "#fff";
  
  ctx.globalAlpha = '0.2'
  // 画半透明圆
  for (let i = 0; i < 7; i++) {
    ctx.beginPath()
    ctx.arc(75, 75, 10 + i*10, 0, 2*Math.PI, true)
    ctx.fill()
  }
}

function drawCanvas3 () {
  const ctx = canvas3Ref.value.getContext('2d')
  // 画背景
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = "#F30";
  ctx.fillRect(0, 112.5, 150, 37.5);
  ctx.fillStyle = "#fff";
  
  //画半透明矩形
  for(let i = 0; i < 10; i++) {
    ctx.fillStyle = `rgb(255 255 255 / ${(i + 1) / 10})`
    for (let j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
    }
  }
}

function drawCanvas4() {
  const ctx = canvas4Ref.value.getContext('2d')
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i
    ctx.beginPath()
    ctx.moveTo(5 + i * 14, 5)
    ctx.lineTo(5 + i * 14, 140)
    ctx.stroke()
  }
}
function drawCanvas5() {
  const ctx = canvas5Ref.value.getContext('2d')
  //创建路径
  ctx.strokeStyle = '#09f'
  ctx.beginPath()
  ctx.moveTo(10, 10)
  ctx.lineTo(140, 10)
  ctx.moveTo(10, 140)
  ctx.lineTo(140, 140)
  ctx.stroke()
  
  
  //画线条
  ctx.strokeStyle = 'black'
  const lineCapStyles = ["butt", "round", "square"]
  
  lineCapStyles.forEach((lineCap,i) => {
    ctx.lineCap = lineCap
    ctx.lineWidth = 15
    ctx.beginPath()
    ctx.moveTo(25 + i * 25, 10)
    ctx.lineTo(25 + i * 25, 140)
    ctx.stroke()
  })
}
function drawCanvas6() {
  const ctx = canvas6Ref.value.getContext('2d')
  ctx.lineWidth = 10;
  const lineJoinStyles = ["round", "bevel", "miter"]
  
  lineJoinStyles.forEach((lineJoin, i) => {
    ctx.lineJoin = lineJoin;
    ctx.beginPath()
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  })
}
function drawCanvas7 () {
  const ctx = canvas7Ref.value.getContext("2d");
  // 清空画布
  ctx.clearRect(0, 0, 150, 150);
  
  // 绘制参考线
  ctx.strokeStyle = "#09f";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // 设置线条样式
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 10;
  
  // 检查输入
  const miterLimitElem = miterLimitRef.value;
  if (miterLimitElem.checkValidity()) {
    ctx.miterLimit = parseFloat(miterLimitElem.value);
  }
  // 绘制线条
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (let i = 0; i < 24; i++) {
    const dy = i % 2 === 0 ? 25 : -25;
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}


function drawCanvas8 () {
  const canvas = canvas8Ref.value
  const ctx = canvas.getContext("2d");
  let offset = 0
  
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.setLineDash([5,3])
    ctx.lineDashOffset = -offset
    ctx.strokeRect(10, 10, 100, 100)
  }
  
  function march () {
    offset++
    if(offset > 5) {
      offset = 0
    }
    draw()
    setTimeout(march, 30)
  }
  march()
}
function drawCanvas9 () {
  const ctx = canvas9Ref.value.getContext('2d')
  //创建渐变
  const linGrad = ctx.createLinearGradient(0, 0, 0, 150)
  linGrad.addColorStop(0, "#00ABEB");
  linGrad.addColorStop(0.5, "#fff");
  linGrad.addColorStop(0.5, "#26C000");
  linGrad.addColorStop(1, "#fff");
  
  const linGrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  linGrad2.addColorStop(0.5, "#000");
  linGrad2.addColorStop(1, "rgb(0 0 0 / 10%)");
  
  
  ctx.fillStyle = linGrad;
  ctx.strokeStyle = linGrad2;
  // 画图形
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50)
}
function drawCanvas10 () {
  const ctx = canvas10Ref.value.getContext('2d')
  // 创建渐变
  const radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, "#A7D30C");
  radgrad.addColorStop(0.9, "#019F62");
  radgrad.addColorStop(1, "rgba(1,159,98,0)");
  
  const radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, "#FF5F98");
  radgrad2.addColorStop(0.75, "#FF0188");
  radgrad2.addColorStop(1, "rgba(255,1,136,0)");
  
  const radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, "#00C9FF");
  radgrad3.addColorStop(0.8, "#00B5E2");
  radgrad3.addColorStop(1, "rgba(0,201,255,0)");
  
  const radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, "#F4F201");
  radgrad4.addColorStop(0.8, "#E4C700");
  radgrad4.addColorStop(1, "rgba(228,199,0,0)");
  
  // 画图形
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  
  // ctx.beginPath()
  // ctx.fillStyle = 'black'
  // ctx.arc(120, 120, 10, 0 ,2 * Math.PI, true)
  // ctx.stroke()
  // ctx.closePath()
  // ctx.beginPath()
  // ctx.fillStyle = 'black'
  // ctx.arc(127, 125, 30, 0 ,2 * Math.PI, true)
  // ctx.stroke()
  // ctx.closePath()
  
  
}

function drawCanvas11 () {
  const ctx = canvas11Ref.value.getContext('2d')
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "rgb(0 0 0 / 50%)";
  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}

function drawCanvas12 () {
  const ctx = canvas12Ref.value.getContext('2d')
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill('evenodd');
  // ctx.fill('nonzero')
}

// 挂载后初始化
onMounted(() => {
  draw()
  drawCanvas1()
  drawCanvas2()
  drawCanvas3()
  drawCanvas4()
  drawCanvas5()
  drawCanvas6()
  drawCanvas7()
  drawCanvas8()
  drawCanvas9()
  drawCanvas10()
  drawCanvas11()
  drawCanvas12()
  canvas7ButtonRef.value.addEventListener('click', () => {
    drawCanvas7()
  })
});


</script>
<style lang="scss" scoped>

</style>