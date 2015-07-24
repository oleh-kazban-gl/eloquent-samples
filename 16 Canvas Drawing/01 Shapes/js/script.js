var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

// Set canvas context size equal to inner window size
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

// For aesthetics purposes let translate shape to the center of canvas
context.translate(context.canvas.width / 2, context.canvas.height / 2);

/**
 * A trapezoid (a rectangle that is wider on one side)
 * @param(minWidth) - top side length of trapezoid
 * @param(maxWidth) - bottom side length of trapezoid
 * @param(height) - height of trapezoid
 */

function drawTrapezoid(minWidth, maxWidth, height) {
  console.log('minWidth: ' + minWidth);
  console.log('maxWidth: ' + maxWidth);
  console.log('height: ' + height);

  context.beginPath();

  // Moving to upper left point
  context.moveTo(-(minWidth / 2), -(height / 2));

  // Top line
  context.lineTo(minWidth, -(height / 2));

  // Right side
  context.lineTo(minWidth + (maxWidth - minWidth) / 2, height);

  // Bottom line
  context.lineTo(-maxWidth / 2, height);

  // Left side
  context.lineTo(-(minWidth / 2), -(height / 2));

  context.stroke();
}

/**
 * A red diamond (a rectangle rotated 45 degrees or ?? radians)
 * @param(width) - side width of diamond
 * @param(color) - HEX value of background color
 */

function drawRedDiamond(width, color) {

  context.fillStyle = color;

  context.font = '28px Georgia';
  context.fillText('Try to press \'Escape\' button', -50, 100);

  addEventListener('keyup', function (event) {
    if (event.keyCode === 27) {
      console.log('Key is pressed - Rotating');
      context.clearRect(-width / 2 - 1, -width / 2 - 1, width + 2, width + 2);

      context.rotate(Math.PI / 4);
      context.fillRect(-width / 2, -width / 2, width, width);
    }
  });

  context.fillRect(-width / 2, -width / 2, width, width);
}

/**
 * A zigzagging line
 * @param(width) - horizontal width of zigzag
 * @param(step) - step of transitioning
 * @param(quantity) - quantity of zigzags
 */

function drawzZigzaggingLine(width, step, quantity) {
  var x = 0;
  var y = 0;

  context.beginPath();
  context.moveTo(x, y);

  for (var count = 0; count < quantity; count++) {
    context.lineTo(width, y += step);
    context.lineTo(0, y += step);
  }

  context.stroke();
}

/*
 * A spiral made up of 100 straight line segments
 */

function drawSpiral() {

}

/*
 * A yellow star
 */

function drawYellowStar() {

}
