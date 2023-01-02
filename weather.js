'use strict'

const url = `https://api.weatherapi.com/v1/current.json?key=1d487d02957243ecb37222335220712&q=Charlotte&aqi=no`;
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const humidity = document.querySelector('.humidity');
const weather = document.querySelector('.weather')

document.addEventListener('DOMContentLoaded', getWeather);

async function getWeather(){
    try{
        const response = await fetch(url);
        if(!response.ok)
            throw Error(`Error: ${response.url} ${response.statusText}`);
        const data = await response.json();
        if(data.location.name === "Charlotte"){
            displayWeather(data);
        }
        else{
            throw Error(`Error: Cannot get question from API`);
        }
    } catch(error) {
        console.log(error);
    }
}

function displayWeather(data) {
    temperature.innerHTML = 'Temperature: ' + data.current.temp_f + '&#8457';
    weatherIcon.classList.remove('hide')
    weatherIcon.src = data.current.condition.icon;
    weather.textContent =  'Weather: ' + data.current.condition.text;
    humidity.textContent = 'Humidity: ' + data.current.humidity + '%'
}
