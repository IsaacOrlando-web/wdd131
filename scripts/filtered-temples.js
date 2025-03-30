window.onload = function() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("currentYear").textContent = year;
    
    let oLastModif = new Date(document.lastModified);
    document.getElementById("lastModification").textContent = oLastModif.toString();
};

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // three more
    {
        templeName: "Barcelona Spain Temple",
        location: "Avinguda de la Vía Augusta y Avinguda de la Clota",
        dedicated: "3 April 2022",
        area: 27500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015.jpg"

    },
    {
        templeName: "Accra Ghana Temple",
        location: "57 Independence Ave",
        dedicated: "16 February 1998",
        area: 17500 ,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-15503.jpg"

    },
    {
        templeName: "Ogden Utah Temple",
        location: "350 22nd St",
        dedicated: "18–20 January 1972 ",
        area: 112232 ,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-4173.jpg"
    },
];

//Connect the buttons or links from navigation
const home = document.getElementById('navigation-home');
const old = document.getElementById('navigation-old');
const newBtn = document.getElementById('navigation-new');
const large = document.getElementById('navigation-large');
const small = document.getElementById('navigation-small');

displayTemplecards(temples);

home.addEventListener("click", () => {
    displayTemplecards(temples);
});

//functions with the buttons
old.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        // Extraemos el año de la fecha dedicated
        const yearMatch = temple.dedicated.match(/\d{4}/);
        const year = yearMatch ? parseInt(yearMatch[0]) : 0;
        return year < 1900;
    });
    displayTemplecards(oldTemples);
});

newBtn.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        // Extraemos el año de la fecha dedicated
        const yearMatch = temple.dedicated.match(/\d{4}/);
        const year = yearMatch ? parseInt(yearMatch[0]) : 0;
        return year > 2000;
    });
    displayTemplecards(newTemples);
});

large.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => {
        
        const area = temple.area;
        return area > 90000;
    });
    displayTemplecards(largeTemples);
});

small.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
        
        const area = temple.area;
        return area < 10000;
    });
    displayTemplecards(smallTemples);
});

//showing the pictures
function displayTemplecards(FilteredTemples) {
    const container = document.getElementById('picture-section');
    
    container.innerHTML = "";
    FilteredTemples.forEach(temple => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            
            <div class="card-info">
                <h3 class="card-tittle">${temple.templeName}</h3>
                <p class="card-location"><span>Location: </span> ${temple.location}</p>
                <p class="card-date"><span>Dedicated: </span>${temple.dedicated}</p>
                <p class="card-size"><span>Size: </span>${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" class="card-img" loading="lazy">
            </div>
        `;

        const img = document.createElement('img');
        img.src = temple.imageUrl;  // Accede correctamente a la URL
        img.alt = temple.templeName; // Texto alternativo
        container.appendChild(card);
    });
}

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});