const apikey="62c95aed0d6076f30514fe5bb5642a2e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search span");

const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response= await fetch(apiurl +city+ `&appid=${apikey}`);
    const data =await response.json();
    console.log(data);

    if(data.message == "city not found"){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";

    }

    document.querySelector(".temprature").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML=data.name; 
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"; 

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="icons8-partly-cloudy-day-50.png"
    }
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src="icons8-sun-48.png"
    }
    
    if(data.weather[0].main == "Rain"){
        weatherIcon.src="icons8-rain-100.png"
    }
    if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png"
    }
    if(data.weather[0].main == "Haze"){
        weatherIcon.src="haze.png"
    }
    if(data.weather[0].main == "Smoke"){
        weatherIcon.src="carbon-dioxide.png"
    }

    document.querySelector(".weather").style.display="block";



}

searchBtn.addEventListener("click",()=>{
    checkweather(searchInput.value);
})