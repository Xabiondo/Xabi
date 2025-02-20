document.addEventListener("DOMContentLoaded", function () {
    // Funcionalidad de personalización (se ejecuta solo si los elementos existen)
    const personalizarLink = document.getElementById("personalizar-link");
    if (personalizarLink) {
      const personalizarCuadro = document.getElementById("personalizar-cuadro");
      const textoPersonalizable = document.getElementById("texto-personalizable");
      const colorButtons = document.querySelectorAll(".color-button");
  
      personalizarLink.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto
        if (personalizarCuadro) {
          personalizarCuadro.style.display = "block"; // Muestra el cuadro
        }
      });
  
      colorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const selectedColor = button.getAttribute("data-color");
          if (textoPersonalizable) {
            textoPersonalizable.style.color = selectedColor;
          }
        });
      });
    }
  
    // Funcionalidad de Dark Mode
    const darkModeButton = document.getElementById("darkModeButton");
    if (darkModeButton) {
      darkModeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
  
        // Si tienes estilos específicos para la navbar en modo oscuro
        const navbar = document.querySelector(".navbar");
        if (navbar) {
          navbar.classList.toggle("dark-mode");
        }
  
        // Cambia el texto del botón según el estado
        darkModeButton.textContent = document.body.classList.contains("dark-mode")
          ? "Light Mode"
          : "Dark Mode";
      });
    }
  
    // Validación y envío del país seleccionado
    const sendButton = document.getElementById("sendButton");
    if (sendButton) {
      sendButton.addEventListener("click", function() {
        const countrySelect = document.getElementById("country");
        const selectedCountry = countrySelect.value;
        const resultMessage = document.getElementById("resultMessage");
  
        if (selectedCountry) {
          resultMessage.innerText = `You have selected: ${countrySelect.options[countrySelect.selectedIndex].text}`;
        } else {
          resultMessage.innerText = "Please select a country before sending.";
        }
      });
    }
  
    // Validación del email al enviar el formulario
    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
      emailForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario para realizar la validación
  
        const emailInput = document.getElementById("email").value;
        const validationMessage = document.getElementById("validationMessage");
        // Expresión regular básica para validar emails
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!emailInput) {
          validationMessage.textContent = "Please enter an email address.";
          validationMessage.style.color = "red";
        } else if (!emailPattern.test(emailInput)) {
          validationMessage.textContent = "Invalid email format. Please include '@' and a valid domain (e.g., .com).";
          validationMessage.style.color = "red";
        } else {
          validationMessage.style.color = "green";
          validationMessage.textContent = "Valid email! Form submitted successfully.";
          // Aquí podrías enviar el formulario si lo deseas
        }
      });
    }
  });
  