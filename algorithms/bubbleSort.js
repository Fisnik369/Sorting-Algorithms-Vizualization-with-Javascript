async function bubbleSort() {
    const ele = document.querySelectorAll(".bar");
    
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){

            ele[j].style.background = 'green';
            ele[j+1].style.background = 'green';

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await wait(delay);
                if (stats == 1) await pauser();

                await swapElements(ele[j], ele[j+1]);
                await swapNumbers(ele[j], ele[j+1]);
            }
            await wait(delay);
            if (stats == 1) await pauser();

            ele[j].style.background = '#4682b4';
            ele[j+1].style.background = '#4682b4';
        }
        ele[ele.length-1-i].style.background = '#cd853f';
        if (stats == 1) await pauser();
    }
    ele[0].style.background = '#cd853f';
}

const bubbleSortButton = document.querySelector(".bubbleSort");
bubbleSortButton.addEventListener('click', async function(){
    await bubbleSort();
});

