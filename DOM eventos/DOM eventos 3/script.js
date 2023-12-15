document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    nombreInput.addEventListener('input', validarNombre);
    emailInput.addEventListener('input', validarEmail);
    passwordInput.addEventListener('input', validarPassword);
  
    formulario.addEventListener('submit', function (event) {
      if (!validarNombre() || !validarEmail() || !validarPassword()) {
        event.preventDefault();
      }
    });
  
    function validarNombre() {
      const nombreValue = nombreInput.value.trim();
      const errorNombre = document.getElementById('errorNombre');
  
      if (nombreValue === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
        nombreInput.classList.add('is-invalid');
        return false;
      } else {
        errorNombre.textContent = '';
        nombreInput.classList.remove('is-invalid');
        return true;
      }
    }
  
    function validarEmail() {
      const emailValue = emailInput.value.trim();
      const errorEmail = document.getElementById('errorEmail');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailValue === '') {
        errorEmail.textContent = 'El correo electrónico es obligatorio.';
        emailInput.classList.add('is-invalid');
        return false;
      } else if (!emailRegex.test(emailValue)) {
        errorEmail.textContent = 'Formato de correo electrónico no válido.';
        emailInput.classList.add('is-invalid');
        return false;
      } else {
        errorEmail.textContent = '';
        emailInput.classList.remove('is-invalid');
        return true;
      }
    }
  
    function validarPassword() {
      const passwordValue = passwordInput.value.trim();
      const errorPassword = document.getElementById('errorPassword');
  
      if (passwordValue === '') {
        errorPassword.textContent = 'La contraseña es obligatoria.';
        passwordInput.classList.add('is-invalid');
        return false;
      } else {
        errorPassword.textContent = '';
        passwordInput.classList.remove('is-invalid');
        return true;
      }
    }
  });
  