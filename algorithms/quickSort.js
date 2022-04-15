async function partition(ele, l, r) {
    let i = l - 1;
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        if (stats == 1) await pauser();
        ele[j].style.background = 'yellow';
        await wait(delay);
        
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            i++;
            if (stats == 1) await pauser();

            await swapElements(ele[i], ele[j]);
            await swapNumbers(ele[i], ele[j]);

            if (stats == 1) await pauser();

            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';

            if (stats == 1) await pauser();
            await wait(delay);
        }
        else{
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    await wait(delay);

    if (stats == 1) await pauser();

    await swapElements(ele[i], ele[r]);
    await swapNumbers(ele[i], ele[r]);

    if (stats == 1) await pauser();

    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    if (stats == 1) await pauser();
    await wait(delay);
    
    for(let k = 0; k < ele.length; k++) {

        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }
    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        if (stats == 1) await pauser();
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length) {
            if (stats == 1) await pauser();
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const quickSortButton = document.querySelector(".quickSort");
quickSortButton.addEventListener('click', async function() {

    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    
    await quickSort(ele, l, r);
});
