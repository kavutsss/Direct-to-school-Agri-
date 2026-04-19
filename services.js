const WEATHER_API_KEY = '398133a7a6msh51384cbccc390e9p1762e6jsnbfab717f1144';
export async function getWeatherData(city) {
    const url = `https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': WEATHER_API_KEY,
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Network response was not ok`);
        }
        const result = await response.json();
        return {
            temperature: result.main.temperature,
            description: result.weather[0].description,
            cityName: result.name
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}
           
