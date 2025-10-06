const weatherData = {  
  "Jakarta": { temperature: 30, condition: "Cerah" },
  "Bandung": { temperature: 25, condition: "Hujan Ringan" },
  "Surabaya": { temperature: 33, condition: "Panas Terik" },
  "Samarinda": { temperature: -28, condition: "Salju" },
  "Medan": { temperature: 29, condition: "Berawan" },
  "Makassar": { temperature: 31, condition: "Gerimis" }
};

function checkWeather() {
  console.clear()

  const city = document.getElementById("cityInput").value.trim();
  const data = weatherData[city];

  if (data) {
    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
  } else {
    console.log(`⚠️ Data cuaca untuk "${city}" tidak ditemukan.`);
  }
}
