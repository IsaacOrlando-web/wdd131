//products
const products = [
    // Your favorite RPGs
    {
      id: "ut-2015",
      name: "Undertale Collector's Edition",
      averagerating: 5.0
    },
    {
      id: "m3-2006",
      name: "Mother 3 (English Fan Translation)",
      averagerating: 5.0
    },
    // Original sci-fi tech products
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    // Classic video games
    {
      id: "smb-1985",
      name: "Super Mario Bros. Cartridge",
      averagerating: 4.9
    },
    {
      id: "zel-1986",
      name: "Legend of Zelda Cartridge",
      averagerating: 5.0
    },
    // More RPGs
    {
      id: "ct-1995",
      name: "Chrono Trigger SNES Cartridge",
      averagerating: 4.9
    },
    {
      id: "eb-1994",
      name: "EarthBound (Mother 2)",
      averagerating: 4.7
    }
  ];

//get the select element
const select = document.getElementById("product-name");
//create option elements for each product
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});