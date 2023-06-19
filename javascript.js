


const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getAPI(city);
});



async function getAPI (submitedCity) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=eddd2c4e17244eeebc7182846231706&q=${submitedCity}&aqi=no`);
    const weatherData = await response.json();
    console.log(weatherData);
}
