const M = require("minimatch");

/**
 * Materialize related inits
 */
var elem = document.querySelector('.tabs');
var options = {}
var instance = M.Tabs.init(elem, options);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems, options);
});


// 
const form = document.getElementById('payment-form');

form.addEventListener("submit", submit);
document.getElementById('cancel').addEventListener("click", returnHome);


function submit(e) {
  e.preventDefault();
  var toastHTML = '<span>Ticked Booked! Please check your email for ticket confirmation.</span>';
  form.reset();
  M.updateTextFields();
  M.toast({ html: toastHTML, displayLength: 4000, completeCallback: returnHome });
}

function returnHome(){
  window.open('./index.html', "_self");
}