// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searcWeather]");
// const userContainer = document.querySelector(".weather-container");
// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searcForm]");
// const searchInput = document.querySelector("[data-searcInput]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");
// const grantAccessBtn = document.querySelector("[data-grantAccess]");





// //varraibles
// let oldTab = userTab;
// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// oldTab.classList.add("current-tab");


// function switchTab(newTab)
// {
//     if(newTab != oldTab)
//     {
//         oldTab.classList.remove("current-tab");
//         oldTab = newTab;
//         oldTab.classList.add("current-tab");
             
//         if(!searchForm.classList.contains("active"))
//         {
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
           
//         } 
//         else{
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             getfromSessionStorage();
//         }
        
//     }
// }


// userTab.addEventListener("click", () => {
//     switchTab(userTab);
// });


// searchTab.addEventListener("click", () => {
//     switchTab(searchTab);
// });


// function getfromSessionStorage()
// {
//     const localCoordinates = sessionStorage.getItem("user-coordinates");

//     grantAccessContainer.classList.add("active");

//     if(!localCoordinates)
//     {
//         const coordinates = JSON.parse(localCoordinates);
//         fetchWeatherInfo(coordinates);

//     }
// }

// async function fetchWeatherInfo(coordinates)
// {
//       const { lat, lon} = coordinates;
     
//       grantAccessContainer.classList.remove("active");

//       loadingScreen.classList.add("active");
//       try {
//            const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
//        const data = await response.json();

//        loadingScreen.classList.remove("active");
//        userInfoContainer.classList.add("active");
//        renderWeartherInfo(data);
//       }
//       catch(err)
//     {
//        loadingScreen.classList.remove("active");
//        //
//     }
// }


// function renderWeartherInfo(weatherInfo)
// {
//      const cityName = document.querySelector("[data-cityName]");
//      const countryIcon = document.querySelector("[data-countryIcon]");
//      const desc = document.querySelector("[data-weatherDesc]");
//      const weatherIcon = document.querySelector("[data-weatherIcon]");
//      const temp = document.querySelector("[data-temp]");
//      const windSpeed = document.querySelector("[data-windSpeed]");
//      const humidity = document.querySelector("[data-humidity]");
//      const cloudlines = document.querySelector("[data-cloud]");
     

//      cityName.innerText = weatherInfo?.name;
//      countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//      desc.innerText = weatherInfo?.weather?.[0]?.description;
//      weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//      temp.innerText = weatherInfo?.main?.temp;
//      windSpeed.innerText = weatherInfo?.wind?.speed;
//      humidity.innerText = weatherInfo?.main?.humidity;
//      cloudlines.innerText = weatherInfo?.clouds?.all;

// }

// function getLocation()
// {
//    if(navigator.geolocation)
//    {
//     navigator.geolocation.getCurrentPosition(showPosition);
//    }
//    else{
//     alert("No Golocation Available...");
//    }
// }

// function showPosition(position)
// {
//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//     }

//     sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
//     fetchWeatherInfo(userCoordinates);
// }
// grantAccessBtn.addEventListener("click",getLocation);

// searchForm.addEventListener("submit",(e) => 
// {
//     e.preventDefault();
//     let cityName = searchInput.value;

//     if(cityName == "")
//         return;
//     else
//         fetchSearchWeatherInfo(cityName);
    
// })

// async function fetchSearchWeatherInfo(city)
// {
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try{
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeartherInfo(data);
//     }
//     catch(err)
//     {
//         alert("not");
//     }
// }


const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");



let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
           
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    
    switchTab(searchTab);
});


function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
       
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
   
    grantAccessContainer.classList.remove("active");
   
    loadingScreen.classList.add("active");
 
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const  data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
    }

}

function renderWeatherInfo(weatherInfo) {
  
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert('Loacation Not Found');
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        alert('Not Found !');
    }
}