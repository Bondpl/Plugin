// const apiKey = process.env.MY_API_KEY;
// console.log(apiKey)
const config = require('./config');

const apiKey = config.api_key;

const res = fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=51.936619,15.508690`).then

console.log(res)