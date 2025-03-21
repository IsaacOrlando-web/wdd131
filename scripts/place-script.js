//Conect to the document
const currentYear = document.getElementById('currentYear');
const lastModified = document.getElementById('lastModification');

const d = new Date();
let year = d.getFullYear();
let oLastModif = new Date(document.lastModified);

currentYear.innerHTML = year;
lastModified.innerHTML = oLastModif;