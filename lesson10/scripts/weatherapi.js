// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const key = "a573692453729f9e107cf2b4ff68c85c"
const lat = "64.8378"
const lon = "-147.7164"

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
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = cap(desc);
}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
console.log(url)
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