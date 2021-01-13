// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=5aa24580971dd5a746c4ac39f1b5270e&units=imperial';

// Event listener to add function to HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Current Date
let moment = new Date();
let newDate = (moment.getMonth() + 1) + '.' + moment.getDate() + '.' + moment.getFullYear();

/* Function called by event listener */
function performAction(e) {
  const city = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;
  getCity(baseURL, city, apiKey)
    .then(function (data) {
      console.log(data)
      //Adding data to POST Request
      postData('/addData', {
        date: newDate,
        name: data.name,
        temp: data.main.temp,
        content
      })
        .then(updateUI())
    })

}

/* Function to GET Web API Data*/
const getCity = async (baseURL, city, key) => {
  const res = await fetch(baseURL + city + key);
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
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    return newData
  } catch (error) {
    console.log('error', error);
  }
}

const updateUI = async () => {
  const req = await fetch('/all');
  try {
    const allData = await req.json();
    document.getElementById('date').innerHTML = `Date: ${allData.date}`;
    document.getElementById('temp').innerHTML = `Temp: ${allData.temp}`;
    document.getElementById('content').innerHTML = `Feelings: ${allData.content}`;
  } catch (error) {
    console.log('error', error);
  }
}

/* Function to GET Project Data */
const retrieveData = async (url = '') => {
  const req = await fetch(url);
  try {
    const allData = await req.json()
  } catch (error) {
    console.log('error', error);
  }
}