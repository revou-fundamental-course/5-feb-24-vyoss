
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
      const fahrenheitToCelsius = (inputValue - gi32) * (5/9);
      temperatureField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
    } 
  }, 1200)

  
}




