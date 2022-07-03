/* personal API key */
const apiKey = '&appid=ad36907d7d93f570ed819c6cac9b3835&units=imperial';

// The DOM elements
const zip = document.querySelector('#zip');
const feelings = document.getElementById('#feelings');
const generate = document.getElementById('generate');

// creating a new date dynamicallly with JS
const today = new Date();
const newDate = today.toDateString();
const temp = document.querySelector('#temp');
// The country code is not needed since the default country is U.S.A
const instance = 'http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}'
const baseURL = 'http://api.openweathermap.org/geo/1.0/zip?zip='


// Generating the event listening function.
