const idkButton = document.getElementById('idk-button');
const idkCount = document.getElementById('idk-count');
let counter = 0;


idkButton.addEventListener('click', idkPlus);

function idkPlus(){
    counter++;
    idkCount.innerText = counter;
}