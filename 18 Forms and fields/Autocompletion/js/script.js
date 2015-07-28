var input = document.getElementById('field');
var suggest = document.getElementById('suggestions');

var terms = [];

for (var name in window) {
  terms.push(name);
}

input.addEventListener('input', function () {
  suggest.textContent = '';

  var results = terms.filter(function (term) {
    return term.indexOf(input.value) === 0
  });

  results.forEach(function(result){
    var div = document.createElement('div');
    div.textContent = result;
    div.addEventListener('click', function(){
      input.value = div.textContent;
      suggest.textContent = '';
    });
    suggest.appendChild(div);
  });


});