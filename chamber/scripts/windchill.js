let tempElement = document.getElementById("temp");
let chillElement = document.getElementById("chill");
let windElement = document.getElementById("wind");

var wind = Math.floor(Math.random() * 100) / 10;
var temp = Math.floor(Math.random() * 100);

tempElement.textContent = temp;
windElement.textContent = wind;

if ((temp <= 50) && (wind > 3.0)) {
    chillElement.textContent = Math.floor((35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))) * 10) / 10
} else {
    chillElement.textContent = "N/A"
}