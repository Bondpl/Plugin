const config = require('./config');

const apiKey = config.api_key;
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=51.936619,15.508690`)
    .then(res => res.json())
    .then(data => console.log(data))