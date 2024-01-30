const apiKey = "cc3a951ee4e31e65f0a936be7306f6db";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
// console.log(searchBox.value);

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windy").innerHTML = data.wind.speed + " km/h";
    // console.log(data.weather[0].main);
    if(data.weather[0].main == "Clouds" || data.weather[0].main == "Haze" || data.weather[0].main == "Fog" ){
        weatherIcon.src = "file:///C:/Users/Ruchit%20Chudasama/Desktop/Weather_App/Images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "file:///C:/Users/Ruchit%20Chudasama/Desktop/Weather_App/Images/clearsky.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "file:///C:/Users/Ruchit%20Chudasama/Desktop/Weather_App/Images/snowflake.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "file:///C:/Users/Ruchit%20Chudasama/Desktop/Weather_App/Images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "file:///C:/Users/Ruchit%20Chudasama/Desktop/Weather_App/Images/rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "file:///C:/Users/Ruchit%20Chudasama/Desktop/Weather_App/Images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

