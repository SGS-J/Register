const fields = document.forms[0].querySelectorAll("input");
const [userField, emailField, passField, confPassField] = Array.from(fields);

const verifyMatchPassword = (e) => {
  const evt = new Event('invalid', {bubbles: true, cancelable: false, composed: true})
  if(confPassField.value !== passField.value) {
    confPassField.dispatchEvent(evt) 
    e.preventDefault()
  } 
}

userField.setAttribute("pattern", "^\\w{3,}");
userField.setAttribute('data-errormessage', "El nombre de usuario debe ser de minimo 3 caracteres.")

passField.setAttribute("pattern", "^\\w{8,}");
passField.setAttribute('data-errormessage', 
  "La Contraseña debe tener una longitud de mínimo 8 caracteres y contener al menos dos numeros."
)

confPassField.setAttribute("data-errormessage", "Las contraseñas no coinciden.")

document.forms[0].addEventListener('submit', e => verifyMatchPassword(e))