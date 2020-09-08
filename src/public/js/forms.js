const inputs = document.forms[0].querySelectorAll('input');

inputs.forEach(input => {
   input.required = true;
})