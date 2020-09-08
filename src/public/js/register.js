const fields = document.forms[0].querySelectorAll("input");
const [userField, emailField, passField] = Array.from(fields);

userField.setAttribute("pattern", "^\\w{3,}");
userField.addEventListener("invalid", (e) => {
  e.target.setCustomValidity(
    "El nombre de usuario debe ser de minimo 3 caracteres"
  );
});

passField.setAttribute("pattern", "^(?=.{8,}\\d{3,})");
passField.addEventListener("invalid", (e) => {
  e.target.setCustomValidity(
    "La contraseña debe medir minimo 8 caracteres y tener al menos 3 numeros"
  );
});


/* ** Removes the validity message on input or focus ** */
fields.forEach((field) => {
  field.addEventListener("input", (e) => {
    e.target.setCustomValidity("");
  });
});

fields.forEach((field) => {
   field.addEventListener("focus", (e) => {
     e.target.setCustomValidity("");
   });
 });
 