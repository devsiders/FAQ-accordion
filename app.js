$(document).ready(function () {
  const accordion = document.querySelectorAll(".header");

  // Al cargar la página, mostrar el acordeón que tiene el icono "plus" con la clase "active"
  accordion.forEach(header => {
    const content = header.nextElementSibling;
    const iconPlus = header.querySelector(".icon-plus");
    const iconMinus = header.querySelector(".icon-minus");

    // Si el icono tiene la clase 'active', mostrar el contenido y ajustar los iconos
    if (iconPlus.classList.contains("active")) {
      content.style.display = "block";  
      iconPlus.style.display = "none";  
      iconMinus.style.display = "block"; 
    }

    // Configuración del evento de clic para alternar el acordeón
    header.addEventListener("click", () => {
      // Si el contenido está visible, ocultarlo
      if (content.style.display === "block") {
        content.style.display = "none"; 
        iconPlus.style.display = "block"; 
        iconMinus.style.display = "none"; 
      } else {
        // Si el contenido está oculto, mostrarlo
        content.style.display = "block"; 
        iconPlus.style.display = "none"; 
        iconMinus.style.display = "block"; 
      }
    });
  });
});
