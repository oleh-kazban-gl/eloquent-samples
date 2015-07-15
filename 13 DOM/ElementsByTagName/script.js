/**
 * Elements by tag name
 * The getElementsByTagName method returns all child elements with a given tag
 * name. Implement your own version of it as a regular nonmethod function that
 * takes a node and a string (the tag name) as arguments and returns an array
 * containing all descendant element nodes with the given tag name.

 * To find the tag name of an element, use its tagName property. But note that
 * this will return the tag name in all uppercase. Use the toLowerCase or
 * toUpperCase string method to compensate for this.
 * @param(node)
 * @param(tagName)
 */

function byTagName(node, tagName) {
  var tags = [];
  var scope = node.childNodes;

  parseTags(scope, tagName);

  function parseTags(nodes, tagName) {
    for (var count = 0; count < nodes.length; count++) {
      var currentTag = nodes[count];
      var currentTagName = nodes[count].tagName;

      if (Object.prototype.toString.call(currentTagName).toUpperCase() !== '[OBJECT UNDEFINED]') {
        if (currentTagName.toLowerCase() === tagName) {
          tags.push(nodes[count]);
        }

        if (Object.prototype.toString.call(currentTag.childNodes).toUpperCase() !== '[OBJECT UNDEFINED]') {
          parseTags(currentTag.childNodes, tagName);
        }

        console.log('nodeId: ' + count + ' nodeName: ' + nodes[count].tagName);
      }
    }
  }

  return tags;
}
