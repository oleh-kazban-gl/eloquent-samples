var code = document.getElementById('code');
var button = document.getElementById('button');
var output = document.getElementById('output');

function evalCode(code) {
  return eval(code);
}

function getSourceCode() {
  return code.value;
}

function run() {
  var sourceCode = getSourceCode();
  var result = evalCode(sourceCode);
  var newLine = document.createElement('br');

  var response = document.createTextNode('> ' + result);
  output.appendChild(response);
  output.appendChild(newLine);
}

button.onclick = run;