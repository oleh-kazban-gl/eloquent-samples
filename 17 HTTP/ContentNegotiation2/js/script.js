var btn = document.getElementById('btn1');

btn.onclick = send;

function setHeader(request, type, data) {
  return request.setRequestHeader(type, data);
}

function send() {
  var headers = [
    'text/plain',
    'text/html',
    'application/json',
    'application/rainbows+unicorns'
  ];

  var headerType = 'Accept';

  function sendHeader(type, content) {
    for (var count = 0; count < headers.length; count++) {
      var data = content[count];

      var request = new XMLHttpRequest();
      request.open('GET', 'http://eloquentjavascript.net/author', false);

      setHeader(request, headerType, data);

      request.send(null);

      console.log(request.status, request.statusText);
      console.log(type + ' : ' + data);
      console.log(request);

    }
  }

  sendHeader(headerType, headers);
}