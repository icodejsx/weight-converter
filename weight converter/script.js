let  name = document.querySelector(".pounds"),
    killograms = document.querySelector(".killograms"),
    grams = document.querySelector(".grams"),
    ounces = document.querySelector(".ounces"),
    form = document.querySelector(".form");


form.addEventListener("input", convertWeight);

  function convertWeight(e){
    if (e.target.classList.contains("pounds")){
        console.log("whala be like bicycle");
    }
  }
