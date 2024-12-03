const apiKey = "64d79060f14667bee7bb9e86e5bcce29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon");

async function checkWeather(city){
    const response= await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        console.log(data);
        if(data.weather[0].icon=="11d" || data.weather[0].icon=="11n"){
            weatherIcon.src="images/thunderstorm.png";
        }
        else if(data.weather[0].icon=="01d" || data.weather[0].icon=="01n"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].icon=="02d" || data.weather[0].icon=="02n"){
            weatherIcon.src="images/few_clouds.png";
        }
        else if(data.weather[0].icon=="03d" || data.weather[0].icon=="03n"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].icon=="04d" || data.weather[0].icon=="04n"){
            weatherIcon.src="images/broken_clouds.png";
        }
        else if(data.weather[0].main=="Humidity"){
            weatherIcon.src="images/humidity.png";
        }
        else if(data.weather[0].main=="Wind"){
            weatherIcon.src="images/wind.png";
        }
        else if(data.weather[0].icon=="50d" || data.weather[0].icon=="50n"){
            weatherIcon.src="images/mist.png";
            //document.querySelector(".card").style.background='';
        }
        else if(data.weather[0].icon=="10d" || data.weather[0].icon=="10n"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].icon=="09d" || data.weather[0].icon=="09n"){
            weatherIcon.src="images/shower_rain.png";
        }
        else if(data.weather[0].icon=="13d" || data.weather[0].icon=="13n"){
            weatherIcon.src="images/snow.png";
        }
        

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
