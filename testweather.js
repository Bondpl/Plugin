async function fetchData() {
    const url = 'https://api.weatherapi.com/v1/current.json?key=***REMOVED***&q=51.936619,15.508690';

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Tutaj możesz manipulować danymi otrzymanymi z API
        console.log(data);

        // Przykład: Wyświetlenie aktualnej temperatury
        const currentTemperature = data.current.temp_c;
        console.log(`Current Temperature: ${currentTemperature}°C`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Wywołaj funkcję fetchData()
fetchData();
