//Select From Html and svae it into variables
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//Create a function to add a scripture
function addScripture() {
    let scripture = document.createElement('li');
    let deleteButton = document.createElement('button');
    scripture.textContent = input.value;
    deleteButton.textContent = '❌';
    scripture.appendChild(deleteButton);
    list.appendChild(scripture);
    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', () => {
        list.removeChild(scripture);
    });
}

//Add event listeners to the button and input
button.addEventListener('click', addScripture);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Verificar si la tecla presionada es "Enter"
        addScripture(); // Llamar a la función addScripture
    }
});