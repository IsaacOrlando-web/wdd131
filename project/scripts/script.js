document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        currentYearElement.textContent = year;
    }
    
    // Para la fecha de última modificación
    const lastModElement = document.getElementById("last-modification");
    if (lastModElement) {
        lastModElement.textContent = document.lastModified;
    }
});