/**
 * Canvas 旋转调试辅助线方法
 * @param {CanvasRenderingContext2D} ctx - Canvas 上下文
 * @param {number} cx - 旋转中心 X 坐标
 * @param {number} cy - 旋转中心 Y 坐标
 * @param {number} angle - 旋转角度（度数，无需转弧度）
 * @param {number} length - 辅助线长度（默认100）
 * @param {Object} styles - 自定义样式（可选）
 */
export function drawRotateDebugLine(ctx, cx, cy, angle, length = 100, styles = {}) {
  // 样式默认值
  const defaultStyles = {
    centerColor: 'red',        // 旋转中心颜色
    originLineColor: '#999',   // 原始基准线颜色
    rotateLineColor: '#0099ff',// 旋转后线条颜色
    textColor: '#333',         // 角度文字颜色
    lineWidth: 2,              // 辅助线宽度
    centerRadius: 4            // 中心圆点半径
  };
  const s = { ...defaultStyles, ...styles };

  // 保存当前绘图状态，避免影响后续绘制
  ctx.save();

  // 1. 绘制旋转中心点（红色圆点）
  ctx.fillStyle = s.centerColor;
  ctx.beginPath();
  ctx.arc(cx, cy, s.centerRadius, 0, Math.PI * 2);
  ctx.fill();

  // 2. 绘制原始基准线（未旋转的水平线，灰色）
  ctx.strokeStyle = s.originLineColor;
  ctx.lineWidth = s.lineWidth;
  ctx.beginPath();
  ctx.moveTo(cx - length / 2, cy);
  ctx.lineTo(cx + length / 2, cy);
  ctx.stroke();

  // 3. 绘制旋转后的辅助线（蓝色）
  ctx.strokeStyle = s.rotateLineColor;
  // 计算旋转弧度
  const radian = angle * (Math.PI / 180);
  // 计算旋转后线段的两个端点
  const x1 = cx - (length / 2) * Math.cos(radian);
  const y1 = cy - (length / 2) * Math.sin(radian);
  const x2 = cx + (length / 2) * Math.cos(radian);
  const y2 = cy + (length / 2) * Math.sin(radian);
  // 绘制旋转线
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // 4. 标注旋转角度（在旋转中心右侧显示）
  ctx.fillStyle = s.textColor;
  ctx.font = '14px Arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${angle}°`, cx + 10, cy);

  // 恢复绘图状态
  ctx.restore();
}