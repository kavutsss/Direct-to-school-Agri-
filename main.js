import {getWeatherData} from './services.js';
import {isInputValid} from './validation.js';

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const displayarea = document.getElementById('weather-Results');

function fetchWeatherData(city) {
  console.log('Fetching weather data for:', city);
  // Simulate fetching weather data
  return{
    temperature:"---",
    desc: "API not connected yet",
    cityName: "city"
  };
}

searchBtn.addEventListener('click', () => {
  const userInput = cityInput.value;
if (validateCityInput(userInput)) {
  const data = fetchWeatherData(userInput);
  displayarea.innerHTML = `
    <h2>${data.cityName}</h2>
    <p>Temperature: ${data.temperature}</p>
    <p>Description: ${data.desc}</p>
  `;
}
});
import {getWeatherData} from './services.js';
import {isInputValid} from './validation.js';