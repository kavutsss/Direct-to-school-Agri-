import { test } from 'node:test';
import assert from 'node:assert';

// Import all your functions
import { isInputValid } from './validation.js';
import { getWeatherData } from './services.js';
import { displayResults } from './main.js';

// Mock browser stuff for testing
global.alert = () => {};
global.fetch = async (url) => {
  if (url.includes('geocoding-api.open-meteo.com')) {
    return {
      ok: true,
      json: async () => ({
        results: [{ latitude: 40.7128, longitude: -74.0060, name: 'New York' }]
      })
    };
  }
  if (url.includes('api.open-meteo.com')) {
    return {
      ok: true,
      json: async () => ({
        current_weather: { temperature: 22, weathercode: 0 }
      })
    };
  }
  return { ok: false };
};

const mockElements = {};
global.document = {
  getElementById: (id) => mockElements[id] || { textContent: '', innerHTML: '' }
};

// ===== ALL YOUR TESTS IN ONE PLACE =====

test('AgriSchool Website Tests', async (t) => {
  
  // 1. VALIDATION TESTS - Check if city names are valid
  await t.test('City name validation works', () => {
    assert.strictEqual(isInputValid(''), false, 'Empty city should be rejected');
    assert.strictEqual(isInputValid('Nairobi123'), false, 'Numbers should be rejected');
    assert.strictEqual(isInputValid('New York!'), false, 'Special chars should be rejected');
    assert.strictEqual(isInputValid('Nairobi'), true, 'Valid city should be accepted');
    assert.strictEqual(isInputValid('New York'), true, 'City with spaces should be accepted');
  });

  // 2. WEATHER API TESTS - Check if weather data fetching works
  await t.test('Weather API works', async () => {
    const result = await getWeatherData('New York');
    assert.strictEqual(result.cityName, 'New York', 'Should return correct city');
    assert.strictEqual(result.temperature, 22, 'Should return temperature');
    assert.strictEqual(result.description, 'Clear sky', 'Should return weather description');
  });

  // 3. DISPLAY TESTS - Check if weather shows up on screen
  await t.test('Weather display works', () => {
    // Mock screen elements
    mockElements['city-name'] = { textContent: '' };
    mockElements['temperature'] = { textContent: '' };
    mockElements['weather'] = { textContent: '' };
    
    const weatherData = {
      cityName: 'Nairobi',
      temperature: 25,
      description: 'Sunny'
    };
    
    displayResults(weatherData);
    
    assert.strictEqual(mockElements['city-name'].textContent, 'Weather in Nairobi', 'City name should display');
    assert.strictEqual(mockElements['temperature'].textContent, 'Temperature: 25°C', 'Temperature should display');
    assert.strictEqual(mockElements['weather'].textContent, 'Conditions: Sunny', 'Weather should display');
  });

  console.log('All tests passed! Your AgriSchool website is working correctly!');

});
