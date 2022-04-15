function wait(sec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, sec); 
    }) 
}

let arraySize = document.querySelector('#size_of_array');
arraySize.addEventListener('input', function(){
    generateArray(parseInt(arraySize.value));
});

let delay = 1500;
let delayElement = document.querySelector('#speed_value');

delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

let array = [];
generateArray();

// Generates new array with 10 unique numbers between 1 and 10, indexed randomly
function generateArray(items = 10) {
    deletePreviousArray();

    array = [];
    while(array.length < 10){
        var r = Math.floor(Math.random() * 10) + 1;
        
        if(array.indexOf(r) === -1){
            array.push(r);
        }   
    }
    const bars = document.querySelector("#array_elem");

    for (let i = 0; i < items; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*35}px`;
        bar.innerHTML = `<h4>${array[i]}</h4>`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        document.body.appendChild(bar)
        bars.appendChild(bar);   
    }
}

// Deletes the previous array in order to be able to generate a new one
function deletePreviousArray() {
    const element = document.querySelector("#array_elem");
    element.innerHTML = '';
}

const arrayGen = document.querySelector(".array_gen");
arrayGen.addEventListener("click", function(){
    generateArray(arraySize.value);
});

document.getElementById("play").setAttribute("disabled", "true")
var stats = 0;

// Pauses the vizualization of certain algorithm
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