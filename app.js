const accordion = document.querySelectorAll(".header");

accordion.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const iconPlus = header.querySelector(".icon-plus");
      const iconMinus = header.querySelector(".icon-minus");
      
      if (content.style.display === "block") {
        content.style.display = "none"; 
        iconPlus.style.display = "block"; 
        iconMinus.style.display = "none";  
      } else {
        content.style.display = "block"; 
        iconPlus.style.display = "none";   
        iconMinus.style.display = "block";  
      }
    });
  });