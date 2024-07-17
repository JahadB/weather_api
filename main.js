const API_KEY = "11111111111111111";//Change to your API key

//const btn = document.getElementById("btn");

const city = prompt("Enter a city:");

fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`, {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
    function cityWeather(address, temp, description, condition) {
        this.address = address;
        this.temp = temp;
        this.condition = condition;
        this.description = description

        this.info = function() {
            return `Temperature in ${this.address} is ${this.temp}F. ${this.description}. ${this.condition}`;
        }

    }

    const city1 = new cityWeather(response.resolvedAddress, response.currentConditions.temp, response.description, response.currentConditions.conditions);
    console.log(city1.info());
  })
.catch(e => {
    console.log("checking",e)
  });
