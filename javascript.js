


const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getAPI(city);
});



async function getAPI(submittedCity) {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=eddd2c4e17244eeebc7182846231706&q=${submittedCity}&aqi=no`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const weatherData = await response.json();
      console.log(weatherData);
      return displayInfo(weatherData);
    } catch (error) {
      alert('An error has occurred: ' + error.message);
    }
  }


async function displayInfo(currentData) {
    const displayInfo = document.getElementById('weather-info');
    displayInfo.innerHTML = "";

    const displayLocation = document.createElement('h1');
    displayLocation.textContent = currentData.location.name;
    displayInfo.appendChild(displayLocation);

    const lastUpdate = document.createElement('p');
    lastUpdate.textContent = currentData.current.last_updated;
    displayInfo.appendChild(lastUpdate);

    const degrees = document.createElement('h2');
    degrees.setAttribute('id', 'temperatureText');
    degrees.textContent = currentData.current.temp_f + '°F';
    displayInfo.appendChild(degrees);
    
    const condition = document.createElement('h3');
    condition.textContent = currentData.current.condition.text;
    displayInfo.appendChild(condition);

    const level2Ctn = document.createElement('div');
    level2Ctn.setAttribute('id', 'level2-ctn')
        const feelsLike = document.createElement('p');
        feelsLike.textContent = "Feels Like: " + currentData.current.feelslike_f;
        level2Ctn.appendChild(feelsLike);

        const humidity = document.createElement('p');
        humidity.textContent = "Humidity:" + currentData.current.humidity + "%";
        level2Ctn.appendChild(humidity);

        const wind = document.createElement('p');
        wind.textContent = "Wind Speed: " + currentData.current.wind_mph + "mph";
        level2Ctn.appendChild(wind);
    displayInfo.appendChild(level2Ctn);
}




function toggleTemperature() {
    var switchElement = document.getElementById("toggleSwitch");
    var temperatureTextElement = document.getElementById("temperatureText");
    
    if (switchElement.checked) {
      var celsius = parseFloat(temperatureTextElement.innerText);
      var fahrenheit = (celsius * 9 / 5) + 32;
      temperatureTextElement.innerText = fahrenheit.toFixed(1) + "°F";
    } else {
      var fahrenheit = parseFloat(temperatureTextElement.innerText);
      var celsius = (fahrenheit - 32) * 5 / 9;
      temperatureTextElement.innerText = celsius.toFixed(1) + "°C";
    }
  }