// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos necesarios
    const personalizarLink = document.getElementById("personalizar-link");
    const personalizarCuadro = document.getElementById("personalizar-cuadro");
    const textoPersonalizable = document.getElementById("texto-personalizable");
    const colorButtons = document.querySelectorAll(".color-button");

    // Mostrar el cuadro cuando se haga clic en "Personalizar"
    personalizarLink.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        personalizarCuadro.style.display = "block"; // Mostrar el cuadro
    });

    // Cambiar el color del texto cuando se haga clic en un botón de color
    colorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedColor = button.getAttribute("data-color"); // Obtener el color del botón
            textoPersonalizable.style.color = selectedColor; // Aplicar el color al texto
        });
    });
});