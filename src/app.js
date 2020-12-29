// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(event) {
  const newCity = document.getElementById('city').value;
  getCity(baseURL, newCity, apiKey)
}

/* Function to GET Web API Data*/
const getCity = async (baseURL, city, key) => {
  const res = await fetch(baseURL + city + key)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log('error', error);
  }
}
/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData
  } catch (error) {
    console.log('error', error);
  }
}

/* Function to GET Project Data */
const retrieveData = async (url = '') => {
  const request = await fetch(url);
  try {
    const allData = await request.json()
  } catch (error) {
    console.log('error', error);
  }
}