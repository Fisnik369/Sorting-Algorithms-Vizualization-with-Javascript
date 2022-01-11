function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
let arraySize = document.querySelector('#size_of_array');
arraySize.addEventListener('input', function(){
    generateRandomArray(parseInt(arraySize.value));
});

let delay = 260;
let delayElement = document.querySelector('#speed_value');

delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

let array = [];
generateRandomArray();

function generateRandomArray(items = 20) {
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