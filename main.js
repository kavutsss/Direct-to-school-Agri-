import { getAuthToken } from "./services.js";

async function updateDashboard() {
  const token = await getAuthToken();
  // ... rest of the function
 
  const dataResponse =await fetch("https://farmsuite.ujuzikilimo.com/api/v1/dashboard/data", {
    headers: {
      "Authorization": `Bearer ${token}`, 
    }
});

const data = await dataResponse.json();
document.getElementById('pH-level').textContent = data.soil_ph;
document.getElementById('crop-suggest').textContent = data.crop_suggestions.join(', ');
document.getElementById('weather').textContent = `${data.weather.description}, ${data.weather.temperature}°C`;
}

updateDashboard();
