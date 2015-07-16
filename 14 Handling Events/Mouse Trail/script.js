/**
 * Mouse trail
 * In JavaScript’s early days, which was the high time of gaudy home pages with
 * lots of animated images, people came up with some truly inspiring ways to use
 * the language.
 * One of these was the “mouse trail”—a series of images that would follow the
 * mouse pointer as you moved it across the page.
 * In this exercise, I want you to implement a mouse trail. Use absolutely
 * positioned <div> elements with a fixed size and background color (refer to
 * the code in the “Mouse Clicks” section for an example). Create a bunch of such
 * elements and, when the mouse moves, display them in the wake of the mouse
 * pointer.
 * There are various possible approaches here. You can make your solution as
 * simple or as complex as you want. A simple solution to start with is to keep
 * a fixed number of trail elements and cycle through them, moving the next one
 * to the mouse’s current position every time a "mousemove" event occurs.
 */

function mouseTrail() {
  var elements = [];
  var trailLength = 80;


  addEventListener('mousemove', function (event) {
    drawTrail(event);
  });

  function drawTrail(event) {
    var trailDiv = document.createElement('div');
    var trailText = document.createTextNode('*');

    trailDiv.appendChild(trailText);
    trailDiv.style.position = 'absolute';

    trailDiv.style.top = event.pageY + 'px';
    trailDiv.style.left = event.pageX + 'px';

    if (elements.length > trailLength) {
      elements.unshift(trailDiv);
      elements.pop();
    } else {
      elements.push(trailDiv);
    }

    clear();
    draw();
  }

  function clear() {
    var divs = document.getElementsByTagName('div');

    for (var count = 0; count < divs.length; count++) {
      document.body.removeChild(divs[count]);
    }
  }

  function draw() {
    for (var count = 0; count < elements.length; count++) {
      document.body.appendChild(elements[count]);
      console.log(elements[count]);
    }
  }
}

mouseTrail();
