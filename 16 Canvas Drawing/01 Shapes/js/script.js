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
    'use strict';

    context.strokeStyle = 'black';

    context.beginPath();

    // Moving to upper left point
    context.moveTo(-(minWidth / 2), -(height / 2));

    // Top line
    context.lineTo(minWidth / 2, -(height / 2));

    // Right side
    context.lineTo(minWidth / 2 + (maxWidth - minWidth) / 2, height / 2);

    // Bottom line
    context.lineTo(-maxWidth / 2, height / 2);

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
    'use strict';

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
    'use strict';

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

/**
 * A spiral made up of 100 straight line segments
 * As in can be seen in Wiki, simple Archimedean spiral can be expressed as:
 * radius = constant + radiusIncrement(angle)
 * @param(constant) - some start constant
 * @param(radiusIncrement) - radius increment on each angle of circle
 * @param(segments) - quantity of segments that should be drawn
 */

function drawSpiral(constant, radiusIncrement, segments) {
    'use strict';

    // Center of canvas;
    var centerX = context.canvas.width / 2;
    var centerY = context.canvas.height / 2;

    context.beginPath();
    context.moveTo(0, 0);

    for (var count = 0; count < segments; count++) {
        var angle = 0.3 * count;
        centerX = (constant + radiusIncrement * angle) * Math.cos(angle);
        centerY = (constant + radiusIncrement * angle) * Math.sin(angle);

        context.lineTo(centerX, centerY);
    }

    context.stroke();
}

/**
 * Attempt to draw Fermat's Spiral
 * @param(constant) - some start constant
 * @param(multiplier) - angle multiplier
 * @param(quantity) - quantity of segments that should be drawn
 */

function drawFermatSpiral(constant, multiplier, quantity) {
    'use strict';

    // Center of canvas;
    var centerX = context.canvas.width / 2;
    var centerY = context.canvas.height / 2;

    context.beginPath();
    context.moveTo(0, 0);

    for (var count = 0; count < quantity; count++) {
        var angle = multiplier * count;
        centerX = (constant + Math.pow(angle, 0.5)) * Math.cos(angle);
        centerY = (constant + Math.pow(angle, 0.5)) * Math.sin(angle);

        context.lineTo(centerX, centerY);
    }

    context.stroke();
}

/**
 * A yellow star (8 rays)
 * @param(diameter) - diameter of star
 * @param(quantity) - quantity of rays
 * @param(color) - color of rendered star
 *
 */

function drawYellowStar(diameter, quantity, color) {
    'use strict';

}

/**
 * A yellow star (8 rays)
 */

function drawStraightStar(outerDiameter, innerDiameter, quantity, color) {
    'use strict';

    var degreeIncrement = 1 / quantity;
    context.fillStyle = color;

    context.moveTo(outerDiameter * Math.cos(0), outerDiameter * Math.sin(0));

    for (var count = 0; count < 2; count += 2 * degreeIncrement) {
        drawSegment(count + degreeIncrement);
    }

    function drawSegment(degree) {
        context.lineTo(innerDiameter * Math.cos(Math.PI * degree), innerDiameter * Math.sin(Math.PI * degree));
        degree += degreeIncrement;
        context.lineTo(outerDiameter * Math.cos(Math.PI * degree), outerDiameter * Math.sin(Math.PI * degree));
    }

    context.fill();
}

function drawHelper(outerDiameter, innerDiameter) {
    'use strict';

    var centerX = 0;
    var centerY = 0;
    context.strokeStyle = 'green';

    context.moveTo(centerX, centerY);

// Primary helpers
    context.arc(centerX, centerY, outerDiameter, 0, Math.PI * 2);
    context.moveTo(0, -outerDiameter);
    context.lineTo(0, outerDiameter);
    context.moveTo(-outerDiameter, 0);
    context.lineTo(outerDiameter, 0);

    // Secondary helpers
    context.arc(centerX, centerY, innerDiameter, 0, Math.PI * 2);

    context.moveTo(-outerDiameter, -outerDiameter);
    context.lineTo(outerDiameter, outerDiameter);
    context.moveTo(-outerDiameter, outerDiameter);
    context.lineTo(outerDiameter, -outerDiameter);

    // Pointer helpers
    // Master
    context.moveTo(0, -outerDiameter);
    context.arc(0, -outerDiameter, 10, 0, Math.PI * 2);
    context.moveTo(0, outerDiameter);
    context.arc(0, outerDiameter, 10, 0, Math.PI * 2);
    context.moveTo(outerDiameter, 0);
    context.arc(outerDiameter, 0, 10, 0, Math.PI * 2);
    context.moveTo(-outerDiameter, 0);
    context.arc(-outerDiameter, 0, 10, 0, Math.PI * 2);

    // Slave
    context.moveTo(innerDiameter * Math.cos(Math.PI / 4), -innerDiameter * Math.sin(Math.PI / 4));
    context.arc(innerDiameter * Math.cos(Math.PI / 4), -innerDiameter * Math.sin(Math.PI / 4), 5, 0, Math.PI * 2);
    context.moveTo(innerDiameter * Math.cos(Math.PI / 4), innerDiameter * Math.sin(Math.PI / 4));
    context.arc(innerDiameter * Math.cos(Math.PI / 4), innerDiameter * Math.sin(Math.PI / 4), 5, 0, Math.PI * 2);
    context.moveTo(-innerDiameter * Math.cos(Math.PI / 4), innerDiameter * Math.sin(Math.PI / 4));
    context.arc(-innerDiameter * Math.cos(Math.PI / 4), innerDiameter * Math.sin(Math.PI / 4), 5, 0, Math.PI * 2);
    context.moveTo(-innerDiameter * Math.cos(Math.PI / 4), -innerDiameter * Math.sin(Math.PI / 4));
    context.arc(-innerDiameter * Math.cos(Math.PI / 4), -innerDiameter * Math.sin(Math.PI / 4), 5, 0, Math.PI * 2);

    context.stroke();

}
