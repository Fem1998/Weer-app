function updateWeatherInfo (response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    
}

function searchCity(city) {
let apiKey = "4d33c994abft304dof4ebf7b3ced4b9b";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeatherInfo);
}

function handleSearchSubmit (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
    
    searchCity (searchInput.value);
}

searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Amsterdam");