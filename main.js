// function convertTemperature() {
//   const inputTemperature = parseFloat(document.getElementById("degree").value);
//   const tempType = document.getElementById("temp-type").value;

//   let convertedTemperature;
//   if (temp-type == "celcius") {
//     convertedTemperature = (inputTemperature * 9) / 5 + 32;
//     document.getElementById("output").textContent = "${inputTemperature} degrees Celcius = ${convertedTemperature} degrees Farenheit.";
//   } // else if (unit === "Farenheit") {
  //   convertedTemperature = ((inputTemperature - 32) * 5) / 9;
  //   document.getElementById("output").textContent = "${inputTemperature} degrees Fahrenheit = ${convertedTemperature} degrees Celcius.";
  // } else {
  //   document.getElementById("output").textContent = "Please Select a Unit.";
  // }
// }

const temperatureField = document.querySelector("#cel-val");
const degree = document.querySelector("#degree");
const button = document.querySelector("#convert-btn");
const selector = document.querySelector("#temp-type");
const clear = document.querySelector("#reset-btn");



window.addEventListener("load", ()  =>{
  degree.value =  "";
  temperatureField.innerHTML = "";
})

clear.addEventListener('click',()=>{
  degree.forEach(degree => degree.value = '' );
    
  });

if(degree.value === ""){
  button.setAttribute("disabled","");
  setTimeout(() =>{
    button.removeAttribute('disabled');
  }, 4000);
}
    
button.addEventListener("click",  (e) =>{
  e.preventDefault();
  convertedTemperature();
  button.innerHTML = "<span class='icon'><i class='bx bx-loader bx-spin'></i> Converting...</span>";
  setTimeout(() => {
    button.innerHTML ="<span>Convert</span>"
  }, 1000);
})

function  convertedTemperature() {
  let inputValue = degree.value;

  setTimeout(() => {
    if (selector.value === "celsius") {
      const celsiusToFarenheit = (inputValue * 9/5) + 32;
      temperatureField.innerHTML = `${celsiusToFarenheit.toFixed(3)} &deg;f`;
    } else if (selector.value === "fahrenheit") {
      const fahrenheitToCelsius = (inputValue - 32) * (5/9);
      temperatureField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
    } 
  }, 1200)

  
}