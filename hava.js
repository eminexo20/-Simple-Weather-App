async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "d620c3175fb4328cf250d3f1a8251582"; // Öz API açarını buraya yaz
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=az`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById("weatherBox").innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <div class="temperature">${Math.round(data.main.temp)}°C</div>
          <div class="condition">${data.weather[0].description}</div>
          <p>Rütubət: ${data.main.humidity}%</p>
          <p>Külək: ${data.wind.speed} m/s</p>
        `;
      } else {
        document.getElementById("weatherBox").innerHTML = `
          <p>Şəhər tapılmadı: <strong>${city}</strong></p>
        `;
      }
    } catch (error) {
      document.getElementById("weatherBox").innerHTML = `
        <p>Xəta baş verdi: ${error.message}</p>
      `;
    }
    
  }
  window.onload = function () {
    document.getElementById("cityInput").value = "Bakı";
    getWeather();
  };
  