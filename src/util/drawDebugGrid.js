/**
 * Draws a light grid over the entire canvas, annotates each line with
 * its pixel coordinate, and highlights the canvas center axis to help with
 * visual debugging when positioning shapes.
 *
 * @param {HTMLCanvasElement} canvas - The canvas element whose bounds define the grid.
 * @param {CanvasRenderingContext2D} ctx - The drawing context used to render the grid.
 * @param {number} [gridSize=50] - Spacing between grid lines in pixels.
 */
export function drawDebugGrid(canvas, ctx, gridSize = 50) {
  ctx.save();
  ctx.strokeStyle = '#eee';
  ctx.lineWidth = 1;
  // 竖线
  for (let x = 0; x <= canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    ctx.fillStyle = '#999';
    ctx.fillText(x, x + 2, 15);
  }
  // 横线
  for (let y = 0; y <= canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
    ctx.fillText(y, 2, y + 15);
  }
  // 中心点十字
  ctx.strokeStyle = 'red';
  const cx = canvas.width / 2, cy = canvas.height / 2;
  ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(canvas.width, cy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, canvas.height); ctx.stroke();
  ctx.restore();
}