//Conect to the document
const currentYear = document.getElementById('currentYear');
const lastModified = document.getElementById('lastModification');
const windchill = document.getElementById('windChill');

//date variables
const d = new Date();
let year = d.getFullYear();
let oLastModif = new Date(document.lastModified);
//temperaturedata
let temp = 10;
let wind = 20;


currentYear.innerHTML = year;
lastModified.innerHTML = oLastModif;
windchill.innerHTML = calculateWindchill(temp, wind);



function calculateWindchill(temperatureC, windSpeedKmh) {
    if (temperatureC <= 10 && windSpeedKmh > 4.8) { 
        const windchill = 13.12 + 0.6215 * temperatureC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * temperatureC * Math.pow(windSpeedKmh, 0.16);
        return windchill.toFixed(2); 
    } else {
        return "N/A"; 
    }
}