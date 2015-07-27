var btn = document.getElementById('btn1');

btn.onclick = send;

function send() {
  var requestTextPlain = new XMLHttpRequest();
  requestTextPlain.open('GET', 'http://eloquentjavascript.net/author', false);
  requestTextPlain.setRequestHeader('Accept', 'text/plain');

  requestTextPlain.send(null);

  console.log(requestTextPlain.status, requestTextPlain.statusText);
  console.log('text/plain:');
  console.log(requestTextPlain);

  var requestTextHtml = new XMLHttpRequest();
  requestTextHtml.open('GET', 'http://eloquentjavascript.net/author', false);
  requestTextHtml.setRequestHeader('Accept', 'text/html');

  requestTextHtml.send(null);

  console.log(requestTextHtml.status, requestTextHtml.statusText);
  console.log('text/html:');
  console.log(requestTextHtml);

  var requestAppJson = new XMLHttpRequest();
  requestAppJson.open('GET', 'http://eloquentjavascript.net/author', false);
  requestAppJson.setRequestHeader('Accept', 'application/json');

  requestAppJson.send(null);

  console.log(requestAppJson.status, requestAppJson.statusText);
  console.log('application/json:');
  console.log(requestAppJson);

  var requestAppUnicorn = new XMLHttpRequest();
  requestAppUnicorn.open('GET', 'http://eloquentjavascript.net/author', false);
  requestAppUnicorn.setRequestHeader('Accept', 'application/rainbows+unicorns');

  requestAppUnicorn.send(null);

  console.log(requestAppUnicorn.status, requestAppUnicorn.statusText);
  console.log('application/rainbows+unicorns:');
  console.log(requestAppUnicorn);
}
