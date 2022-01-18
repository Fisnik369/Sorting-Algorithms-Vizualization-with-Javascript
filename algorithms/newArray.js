function wait(sec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, sec); 
    }) 
}
let arraySize = document.querySelector('#size_of_array');
arraySize.addEventListener('input', function(){
    generateRandomArray(parseInt(arraySize.value));
});

let delay = 1500;
let delayElement = document.querySelector('#speed_value');

delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

let array = [];
generateRandomArray();

function generateRandomArray(items = 10) {
    deletePreviousArray();

    array = [];
    for (let i = 0; i < items; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    const bars = document.querySelector("#array_elem");

    for (let i = 0; i < items; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
function deletePreviousArray() {
    const element = document.querySelector("#array_elem");
    element.innerHTML = '';
}
// TODO: Generate new array with the current size, not the defualt size
const arrayGen = document.querySelector(".array_gen");
arrayGen.addEventListener("click", function(){
    generateRandomArray(arraySize.value);
});

document.getElementById("play").setAttribute("disabled", "true")
var stats = 0;

function pauser() {
    return new Promise(resolve => {
        let playbuttonclick = function () {
            document.getElementById("pause").removeAttribute("disabled")
            document.getElementById("play").setAttribute("disabled", "true")
            document.getElementById("play").removeEventListener("click", playbuttonclick);

            stats = 0;
            resolve("resolved");
        }
        document.getElementById("play").addEventListener("click", playbuttonclick)
    })
}
document.getElementById("pause").addEventListener("click", function () {
stats = 1;

document.getElementById("pause").setAttribute("disabled", "true")
document.getElementById("play").removeAttribute("disabled")
})