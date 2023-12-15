const apiKey = 'f17b799c0618421142cf832a0905c16a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const inputField = document.querySelector('#inputvalue');
const button = document.querySelector('#searchbtn');


let Temperature = document.querySelector('.temp');
let City = document.querySelector('.city');
let Wind = document.querySelector('#wind');
let Humidity = document.querySelector('#humidity');

let weather = document.querySelector('.weather');
let weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('.errormsg').style.display = 'block'
        weather.style.display = 'none'
    }
    let data = await response.json();
    console.log(data)
    Temperature.innerHTML = Math.round(data.main.temp) + '°C';
    City.innerHTML = data.name;
    Humidity.innerHTML = data.main.humidity + '%'
    Wind.innerHTML = data.wind.speed + 'km/h'
    weather.style.display = 'block'
    document.querySelector('.errormsg').style.display = 'none'
    if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }else if(data.weather[0].main == 'Rain'){
       weatherIcon.src = 'images/rain.png';      
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png';      
     }
     else if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';      
     }
     else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';      
     }
     else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png';      
     }

}



button.addEventListener( 'click' ,()=>{
    checkWeather(inputField.value);
})
