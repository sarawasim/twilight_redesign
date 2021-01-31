var elem = document.querySelector('.tabs');
var options = {}
var instance = M.Tabs.init(elem, options);

// For Form selects
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});


/**
 * @Megan - You can do form validation here
 */
const form = document.getElementById('payment-form');
form.onsubmit = submit;

function submit(e) {
  e.preventDefault();
  console.log("Submitted Form ✔️");
}