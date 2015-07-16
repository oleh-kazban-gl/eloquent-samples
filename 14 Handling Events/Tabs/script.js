/*
 Tabs
 A tabbed interface is a common design pattern. It allows you to select an
 interface panel by choosing from a number of tabs “sticking out” above an
 element.

 In this exercise you’ll implement a simple tabbed interface. Write a function,
 asTabs, that takes a DOM node and creates a tabbed interface showing the child
 elements of that node. It should insert a list of <button> elements at the top
 of the node, one for each child element, containing text retrieved from the
 data-tabname attribute of the child. All but one of the original children
 should be hidden (given a display style of none), and the currently visible
 node can be selected by clicking the buttons.

 When it works, extend it to also style the currently active button differently.
 */

function asTabs(placeholder) {
  var childNodes = [];

  parsePlaceholder();
  drawControls();

  function parsePlaceholder() {
    for (var count = 0; count < placeholder.childNodes.length; count++) {
      var childNode = placeholder.childNodes[count];
      if (childNode.nodeType == document.ELEMENT_NODE) {
        childNodes.push(childNode);
      }
    }
  }

  function drawControls() {
    var div = document.createElement('div');
    placeholder.insertBefore(div, placeholder.firstChild);

    childNodes.forEach(function(tab, i){
      var button = document.createElement('button');
      button.textContent = tab.getAttribute('data-tabname');
      button.addEventListener('click', function () {
        selectTab(i);
      });
      div.appendChild(button);
    });

    selectTab(0);

    //for (var count = 0; count < childNodes.length; count++) {
    //  var currentTag = childNodes[count];
    //  var currentTagName = currentTag.tagName;
    //  var currentTagAttr;
    //
    //  if (currentTagName === 'DIV') {
    //    currentTagAttr = currentTag.getAttribute('data-tabname');
    //    console.log(currentTag + ' : ' + currentTagName + ' : ' + currentTagAttr);
    //
    //    var button = document.createElement('button');
    //    var buttonText = document.createTextNode(currentTagAttr);
    //
    //    button.appendChild(buttonText);
    //    div.appendChild(button);
    //  }
    //}
  }

  function selectTab(i) {
    var buttons = placeholder.getElementsByTagName('div')[0].childNodes;

    for (var count = 0; count < childNodes.length; count++) {
      var tab = childNodes[count];
      var button = buttons[count];

      if (count !== i) {
        tab.style.display = 'none';
        button.style.backgroundColor = '';
        button.style.color = '';
      } else {
        tab.style.display = '';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
      }
    }
  }
}

