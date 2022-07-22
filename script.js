let  pounds = document.querySelector(".pounds"),
    killograms = document.querySelector(".kilograms"),
    grams = document.querySelector(".grams"),
    ounces = document.querySelector(".ounces"),
    form = document.querySelector("form");

form.addEventListener("input", convertWeight);

  function convertWeight(e) {
    if (e.target.classList.contains("pounds")) {
        let x = e.target.value;
        killograms.value = (x / 2.2046).toFixed(3);
        grams.value = (x / 0.0022046).toFixed(3);
        ounces.value = (x * 16 ).toFixed(3);
    }

     if (e.target.classList.contains("kilograms")) {
        let x = e.target.value;
        pounds.value = (x * 2.2046).toFixed(3);
        grams.value =( x * 1000).toFixed(3);
        ounces.value = ( x * 35.274).toFixed(3);
    }

     if (e.target.classList.contains("grams")) {
       let x = e.target.value;
        killograms.value = (x / 1000).toFixed(3);
        pounds.value = (x * 0.0022046).toFixed(3);
        ounces.value = (x * 0.035274).toFixed(3);
     }

      if (e.target.classList.contains("ounces")) {
        let x = e.target.value;
        killograms.value = (x / 35.274).toFixed(3);
        grams.value = (x  / 0.035274).toFixed(3);
        pounds.value = (x * 0.0625).toFixed(3);
      }
  }

  