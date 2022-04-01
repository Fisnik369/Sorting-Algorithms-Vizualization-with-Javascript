async function selectionSort(){
    const ele = document.querySelectorAll(".bar");

    for(let i = 0; i < ele.length; i++){
        let min_index = i;
        ele[i].style.background = 'blue';
        
        if (stats == 1) await pauser();

        for(let j = i+1; j < ele.length; j++){
            ele[j].style.background = 'red';
            if (stats == 1) await pauser();

            await wait(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    if (stats == 1) await pauser();
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                if (stats == 1) await pauser();
                ele[j].style.background = 'cyan';
            }
            if (stats == 1) await pauser(); 
        }
        await wait(delay);

        await swapElements(ele[min_index], ele[i]);
        await swapNumbers(ele[min_index], ele[i]);
        
        if (stats == 1) await pauser();
        ele[min_index].style.background = 'cyan';

        if (stats == 1) await pauser();
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    await selectionSort();
});