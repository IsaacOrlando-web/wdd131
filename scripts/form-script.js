// Constantes y variables
const REVIEW_COUNT_KEY = "reviewCount";
const products = [
    { id: "ut-2015", name: "Undertale Collector's Edition", averagerating: 5.0 },
    { id: "m3-2006", name: "Mother 3 (English Fan Translation)", averagerating: 5.0 },
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "smb-1985", name: "Super Mario Bros. Cartridge", averagerating: 4.9 },
    { id: "zel-1986", name: "Legend of Zelda Cartridge", averagerating: 5.0 },
    { id: "ct-1995", name: "Chrono Trigger SNES Cartridge", averagerating: 4.9 },
    { id: "eb-1994", name: "EarthBound (Mother 2)", averagerating: 4.7 }
];

// Función para actualizar el contador de reviews
function updateReviewCounter() {
    const countElement = document.getElementById("count");
    if (!countElement) return;

    const reviewCount = getReviewCount();
    
    countElement.textContent = reviewCount > 0 
        ? `Total Reviews: ${reviewCount}` 
        : "No reviews yet. Be the first!";
}

// Función para obtener el conteo actual
function getReviewCount() {
    return Number(localStorage.getItem(REVIEW_COUNT_KEY)) || 0;
}

// Función para incrementar el contador
function incrementReviewCounter() {
    const newCount = getReviewCount() + 1;
    localStorage.setItem(REVIEW_COUNT_KEY, newCount.toString());
    return newCount;
}

// Inicialización del formulario
function initForm() {
    const select = document.getElementById("product-name");
    if (select) {
        products.forEach(product => {
            const option = new Option(product.name, product.id);
            select.add(option);
        });
    }

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", () => {
            incrementReviewCounter();
        });
    }
}

// Inicialización de la página de reviews
function initReviewPage() {
    updateReviewCounter();
}

// Detección automática de la página
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("product-name")) {
        initForm();
    } else if (document.getElementById("count")) {
        initReviewPage();
    }
});