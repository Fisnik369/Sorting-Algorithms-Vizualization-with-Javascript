async function insertionSort(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = '#cd853f';
    for(let i = 1; i < ele.length; i++){

        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'green';
        await wait(delay);
        if (stats == 1) await pauser();

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = 'green';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            await wait(delay);
            if (stats == 1) await pauser();
            for(let k = i; k >= 0; k--){
                ele[k].style.background = '#cd853f';
                if (stats == 1) await pauser();
            }
            if (stats == 1) await pauser();
        }
        await wait(delay);
        ele[j+1].style.height = key;
        ele[i].style.background = '#cd853f';
        if (stats == 1) await pauser();
    }
}
const insertionSortButton = document.querySelector(".insertionSort");
insertionSortButton.addEventListener('click', async function(){
    await insertionSort();
});