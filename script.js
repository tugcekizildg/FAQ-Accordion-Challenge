document.addEventListener("DOMContentLoaded", function () {
    const plusSigns = document.querySelectorAll(".plus-sign");
    const minusSigns = document.querySelectorAll(".minus-sign");
    const textElements = document.querySelectorAll(".text");
  
    plusSigns.forEach(function (plusSign, index) {
      plusSign.addEventListener("click", function () {
        textElements[index].style.display = "block";
        plusSign.style.display = "none";
        minusSigns[index].style.display = "inline";
      });
    });
  
    minusSigns.forEach(function (minusSign, index) {
      minusSign.addEventListener("click", function () {
        textElements[index].style.display = "none";
        minusSign.style.display = "none";
        plusSigns[index].style.display = "inline";
      });
    });
  });
  