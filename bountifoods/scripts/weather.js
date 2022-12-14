const currentTemp   = document.querySelector("#temp")
const weatherIcon   = document.querySelector('#weather-icon');
const captionDesc   = document.querySelector('.sky');
const windElement   = document.querySelector("#wind");
const humidElement  = document.querySelector("#humid");

const forecastElement = document.querySelector('#forecast')

const key = "a573692453729f9e107cf2b4ff68c85c"
const lat = "33.1959"
const lon = "-117.3795"

function cap(string) {
    let outstring = "";
    let parts = string.split(' ')
    for (let i = 0; i < parts.length; i++) {
        outstring += parts[i][0].toUpperCase() + parts[i].substring(1)
        if (i != parts.length) {outstring += " "}
    }
    return outstring;
}

function displayToday(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}`;
    windElement.innerHTML = `${data.wind.speed.toFixed(1)}`;
    humidElement.innerHTML = `${data.main.humidity}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = cap(desc);
}

function displayForecast(list) {
    var count = 0;
    for (var i = 0; i < list.length && count < 5; ++i) {

        var day = new Date(list[i].dt * 1000);
        if (day.getHours() < 10) continue;

        var target = new Date().getDay() + count;
        if (target >= 7) target -= 7;

        if (day.getDay() == target) {
            count++;
            //Do the stuff!
            let data = list[i];
            var element = document.createElement("section");
            element.classList.add("forecasted");
            
            var date = document.createElement("h6");
            date.textContent = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day.getDay()];
            element.appendChild(date);

            var img = document.createElement("img");
            img.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
            img.setAttribute("alt", data.weather[0].description)
            element.appendChild(img);

            var temp = document.createElement("p");
            temp.innerHTML = `${data.main.temp.toFixed(0)}&#8457;`;
            element.appendChild(temp);

            forecastElement.appendChild(element);
        }
    }
}

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
async function apiFetch() {
    try {
      const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayToday(data.list[0]);
            displayForecast(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

/* sample
{
    "coord":
    {
        "lon":147.72,
        "lat":64.8401
    },
    "weather":
    [
        {
            "id":802,
            "main":"Clouds",
            "description":"scattered clouds",
            "icon":"03n"
        }
    ],
    "base":"stations",
    "main":
    {
        "temp":-41.31,
        "feels_like":-41.31,
        "temp_min":-41.31,
        "temp_max":-41.31,
        "pressure":1033,
        "humidity":91,
        "sea_level":1033,
        "grnd_level":926
    },
    "visibility":10000,
    "wind":
    {
        "speed":2.08,
        "deg":15,
        "gust":2.44
    },
    "clouds":
    {
        "all":50
    },
    "dt":1670973103,
    "sys":
    {
        "sunrise":1670976456,
        "sunset":1670990376
    },
    "timezone":39600,
    "id":0,
    "name":"",
    "cod":200
}
*/