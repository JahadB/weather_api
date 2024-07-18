const API_KEY = "111111111111111111111";//Change to your API key

const btn = document.getElementById("btn");

const form = document.getElementById("form");
const userInput = document.getElementById("city");


const infoContainer = document.getElementById("info");


function info(infoContainer, address, temp, condition, description) {
  let location = infoContainer.querySelector('.location');
    if (!location) {
      location = document.createElement("p");
      location.className = 'location';
      infoContainer.appendChild(location);
    }
    location.innerHTML = address;

    let cityTemp = infoContainer.querySelector('.temp');
    if (!cityTemp) {
      cityTemp = document.createElement("p");
      cityTemp.className = 'temp';
      infoContainer.appendChild(cityTemp);
    }
    cityTemp.textContent = temp + " F";

    let weatherCondition = infoContainer.querySelector('.condition');
    if (!weatherCondition) {
      weatherCondition = document.createElement("p");
      weatherCondition.className = 'condition';
      infoContainer.appendChild(weatherCondition);
    }
    weatherCondition.textContent = condition;

    let weatherDescription = infoContainer.querySelector('.description');
    if (!weatherDescription) {
      weatherDescription = document.createElement("p");
      weatherDescription.className = 'description';
      infoContainer.appendChild(weatherDescription);
    }
    weatherDescription.textContent = description;
}



function cityWeather(address, temp, description, condition) {
  this.address = address;
  this.temp = temp;
  this.condition = condition;
  this.description = description

  this.info = function() {
      return `Temperature in ${this.address} is ${this.temp}F. ${this.description}. ${this.condition}`;
  }



}


btn.addEventListener("click", () => {
  if(userInput.value != ""){
    getCity(userInput.value);
    userInput.value = "";
  }
});

function getCity(city) {
fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`, {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {

    //const city1 = new cityWeather(response.resolvedAddress, response.currentConditions.temp,
    //                              response.description, response.currentConditions.conditions);

    info(infoContainer, response.resolvedAddress, response.currentConditions.temp,
                        response.currentConditions.conditions, response.description);
    //console.log(city1.info());
  })
.catch(e => {
    console.log("checking",e)
  });
}

