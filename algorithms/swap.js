// Swaps the bars
async function swapElements(firstElement, secondElement){
    var temp = firstElement.style.height;
    firstElement.style.height = secondElement.style.height;
    secondElement.style.height = temp;
}

// Swaps the numbers in bars
async function swapNumbers(firstNumber, secondNumber) {
    var temp = firstNumber.innerHTML;
    firstNumber.innerHTML = secondNumber.innerHTML;
    secondNumber.innerHTML = temp;
}
