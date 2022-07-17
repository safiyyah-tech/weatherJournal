/* personal API key */
const apiKey = '&appid=b63e0438b03c686d5dde10524bc54930&units=imperial';

// The DOM elements
const zip = document.querySelector('#zip');
const feelings = document.getElementById('feelings');
const generate = document.getElementById('generate');
const date = document.querySelector('#date');
const temp = document.querySelector('#temp');
const content = document.querySelector('#content');
const zipCode = document.querySelector('#zipcode'); 

// creating a new date dynamicallly with JS
const today = new Date();
const newDate = today.toDateString();
// The country code is not needed since the default country is U.S.A
const instance = 'http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}'
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='


// Generating the event listening function.

const getWeather = async (zipCode) => {
  const response = fetch(baseURL+zipCode+apiKey);
  const data = (await response).json();

  return await data;
};

generate.addEventListener('click', async (e) => {
  e.preventDefault();
  const data = await getWeather(zip.value.trim());
  date.innerHTML = newDate;
  content.textContent = feelings.value;
  temp.innerHTML = data.main.temp + 'Fahrenheit';
  zipCode.innerHTML = zip.value;
});

