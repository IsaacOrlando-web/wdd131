const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

let count = 1;

buttonA.onclick = () => {  // Aquí está corregido el error
    buttonA.textContent = "Try again";
    headingA.textContent = `You clicked the button ${count} times`;
    count++;
};