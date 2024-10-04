document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '6f138d4c9debb0b1f3a968880e16e3e8';  // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('weather-info').innerHTML = `<p>City not found</p>`;
            } else {
                const weatherHtml = `
                    <p>City: ${data.name}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
                document.getElementById('weather-info').innerHTML = weatherHtml;
            }
        })
        .catch(() => {
            document.getElementById('weather-info').innerHTML = `<p>Failed to fetch data</p>`;
        });
});
