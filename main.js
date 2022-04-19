const idkButton = document.getElementById('idk-button');
const idkCount = document.getElementById('idk-count');
idkCount.innerText = 0;

idkButton.addEventListener('click', idkPlus);

function idkPlus(){
    idkCount.innerText++;
}