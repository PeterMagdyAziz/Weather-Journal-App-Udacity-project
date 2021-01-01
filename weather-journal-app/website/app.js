/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip="; // base URL for OpenWeatherMap API
const apiKey = "&appid=fe3f8280d18817dea048405dedc108f0"; // Personal API Key for OpenWeatherMap API

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function to GET Project Data */
const getData = async(url="")=>{ 
    const req = await fetch(url); // fetching the URL
    try {
        const data = req.json(); // recieving data and transform to json to be used
        return data; // return data to be used 
    } catch (error) {
        console.log("error",error); // to display error if detected
    }
};

/* Function to POST data */
const postData = async(url="",data={})=>{
    const res = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
    try {
        const newData = await res.json();
        return newData;
    }catch(error) {
      console.log("error", error); // to display error if detected
    }
};


// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click",getAPIDate);

/* Function called by event listener */
function getAPIDate(){
    let zipCode = document.getElementById("zip").value;
    let userResponse = document.getElementById("feelings").value;
    getTemp(baseURL,zipCode, apiKey)
    .then(function(data){
        // Add data
        postTemp('http://localhost:8000/addtemp', {temperature: data.main.temp, date: newDate, user_response: userResponse} );
       
    })
    .then(function(){
        updateUI();
    })
}

/* Function to GET Web API Data*/
const getTemp = async(baseURL, zipCode, apiKey) => { // get fn to gat data from api
    const res =await fetch(baseURL + zipCode + apiKey) // fetching the data from the OpenWeatherMap API with a full URL
    try {
        const data = await res.json();// recieving data and transform to json to be used
        return data; // return data to be used
    } catch (error) {
        console.log("error",error); // to display error if detected
    }
}


// Function to post data and save data in server
const postTemp = async ( url = '', data = {})=>{
    //console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json(); 
      }catch(error) {
        console.log("error", error); // to display error if detected
      }
}

// Function to get data from server and update UI

const updateUI = async(url='http://localhost:8000/all')=>{ 
    const requestedData = await fetch(url);// fetching the data reom the URL 
    try {
        const updatedData = await requestedData.json(); // transfroming the recieved data to json to be used 
        document.getElementById("date").innerHTML = updatedData.date; // updating the ui with date
        document.getElementById("temp").innerHTML = updatedData.temperature; // updating the UI with temp
        document.getElementById("content").innerHTML = updatedData.userResponse; // updating the UI with the user feeling
    } catch (error) {
        console.log("error",error) // to display error if detected
    }
}