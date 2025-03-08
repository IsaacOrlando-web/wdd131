window.onload = function() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("currentyear").textContent = year;
    let oLastModif = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = oLastModif;
};