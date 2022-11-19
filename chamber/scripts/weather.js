const currentTemp  = document.querySelector("#temp")
const weatherIcon  = document.querySelector('#weather-icon');
const captionDesc  = document.querySelector('.sky');
const chillElement = document.querySelector("#chill");
const windElement  = document.querySelector("#wind");

const key = "a573692453729f9e107cf2b4ff68c85c"
const lat = "40.4955"
const lon = "-112.0152"

function cap(string) {
    let outstring = "";
    let parts = string.split(' ')
    for (let i = 0; i < parts.length; i++) {
        outstring += parts[i][0].toUpperCase() + parts[i].substring(1)
        if (i != parts.length) {outstring += " "}
    }
    return outstring;
}

function displayResults(data) {
    const temp = data.main.temp;
    const wind = data.wind.speed;
    currentTemp.innerHTML = `${temp.toFixed(0)}`;
    windElement.innerHTML = `${wind.toFixed(1)}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = cap(desc);

    if ((temp <= 50) && (wind > 3.0)) {
        chillElement.textContent = Math.floor((35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))) * 10) / 10
    } else {
        chillElement.textContent = "N/A"
    }
}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
async function apiFetch() {
    try {
      const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();
