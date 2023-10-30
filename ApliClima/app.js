const Apikey = '602be6b97b9dc950bc2117ede40c900e';
const UrlBase = 'https://api.openweathermap.org/data/2.5/weather';

const btnCity = document.querySelector('#btnCity');
const inputCity = document.querySelector('#city');


const fetchapi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon, apikey){
    const url = `${ UrlBase }?lat=${ lat }&lon=${ lon }&appid=${ apikey }`;
    const clima = await fetchapi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML = temperature + '°C - ' + clima.name;
    pintaFondo(temperature);
}

async function getClimaByCity(city, apikey){
    const url = `${ UrlBase }?q=${ city }&appid=${ apikey }`;
    const clima = await fetchapi(url);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML = temperature + '°C - ' + clima.name;
    pintaFondo(temperature);
    pintaEmoji(temperature);
  
}

function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if(temp < 13){
        fondo.style.background = '#00FFFF';
    } else if(temp < 22){
        fondo.style.background = '#FFD700';
    } else {
        fondo.style.background = '#FF0000';
    }
}

function pintaEmoji(temp){
    const emo = document.querySelector('#emoji');
    if(temp < 13){
        emo.innerHTML = '❄️🥶🌬️';

    } else if (temp < 22){
        emo.innerHTML = '😎🍻🌈';

    } else {
        emo.innerHTML = '😫🥵🌡️'
    }
}

// Obtener geolocalización
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat, lon, Apikey);
  });

function buttonAction(){
    const city = inputCity.value;
    if(city){
        getClimaByCity(city, Apikey);
    }
}

btnCity.addEventListener('click', buttonAction);