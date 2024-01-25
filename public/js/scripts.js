const url = "https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=9f6b213cd28725dd2d53b982bd460772&units=metric";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = parseInt(data.main.temp);
    document.getElementById("temperature").innerHTML = ` ${temperature}°C`;
  });


 
