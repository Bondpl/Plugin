//const config = require('./config');

const apiKey = "***REMOVED***";
let resData;
async function fetchData() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=51.936619,15.508690`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        resData = data;
        const currentTemperature = data.current.temp_c;
        console.log(`Current Temperature: ${currentTemperature}°C`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchData().then(() => {
    console.log(resData)
    const placeElement = document.getElementById("place");
    const temperatureElement = document.getElementById("temperature")
    console.log(placeElement)
    temperatureElement.innerHTML = resData.current.temp_c;
    placeElement.innerHTML = resData.location.name;
})
