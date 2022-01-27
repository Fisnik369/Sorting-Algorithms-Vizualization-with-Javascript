async function insertionSort(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = '#cd853f';
    for(let i = 1; i < ele.length; i++){

        let j = i - 1;
        if (stats == 1) await pauser();
        let key = ele[i].style.height;
        ele[i].style.background = 'green';
        await wait(delay);
        
        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = 'green';
            var tempHeight = ele[j+1].style.height;
            var tempNumber = ele[j+1].innerHTML;

            ele[j+1].style.height = ele[j].style.height;
            ele[j].style.height = tempHeight;

            ele[j+1].innerHTML = ele[j].innerHTML;
            ele[j].innerHTML = tempNumber;
            j--;
            await wait(delay);
            if (stats == 1) await pauser();
            for(let k = i; k >= 0; k--){
                if (stats == 1) await pauser();
                ele[k].style.background = '#cd853f';
                
            }
            if (stats == 1) await pauser();
        }
        await wait(delay);
        if (stats == 1) await pauser();
        ele[j+1].style.height = key;
        ele[i].style.background = '#cd853f';
        if (stats == 1) await pauser();
    }
}
const insertionSortButton = document.querySelector(".insertionSort");
insertionSortButton.addEventListener('click', async function(){
    await insertionSort();
});