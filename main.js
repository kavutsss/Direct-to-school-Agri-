import {getWeatherData} from './services.js';
import {isInputValid} from './validation.js';

// Only run DOM code if document exists (browser environment)
if (typeof document !== 'undefined') {
  const agriForm = document.getElementById('agriForm');
  agriForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById('location').value;
    if (isInputValid(city)) {
      console.log("Validation passed saving data...");
    const weatherData = await getWeatherData(city);
      if (weatherData) {
        displayResults(weatherData);
      }
    }
  });
}

export function displayResults(weatherData) {
  const cityNameElement = document.getElementById('city-name');
  const temperatureElement = document.getElementById('temperature');
  const weatherElement = document.getElementById('weather');
  
  cityNameElement.textContent = `Weather in ${weatherData.cityName}`;
  temperatureElement.textContent = `Temperature: ${weatherData.temperature}°C`;
  weatherElement.textContent = `Conditions: ${weatherData.description}`;
}
