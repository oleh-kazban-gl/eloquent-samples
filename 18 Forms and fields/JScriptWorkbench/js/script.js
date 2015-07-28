document.querySelector('#button').addEventListener('click', function() {
  var code = document.querySelector('#code').value;
  var output = document.querySelector('#output');

  try {
    var result = new Function(code)();
    output.innerHTML = String('> ' + result);
  } catch (error) {
    output.innerHTML = String('ERROR: ' + error);
  }
});