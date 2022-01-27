async function partitionLomuto(ele, l, r){
    let i = l - 1;
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        ele[j].style.background = 'yellow';
        await wait(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;

            var temp1 = ele[i].style.height;
            var temp1Number = ele[i].innerHTML;

            ele[i].style.height = ele[j].style.height;
            ele[j].style.height = temp1;

            ele[i].innerHTML = ele[j].innerHTML;
            ele[j].innerHTML = temp1Number;

            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            await wait(delay);
        }
        else{
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    await wait(delay);
    var temp2 = ele[i].style.height;
    var temp2Number = ele[i].innerHTML;

    ele[i].style.height = ele[r].style.height;
    ele[r].style.height = temp2;

    ele[i].innerHTML = ele[r].innerHTML;
    ele[r].innerHTML = temp2Number;

    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

   
    await wait(delay);
    
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const quickSortButton = document.querySelector(".quickSort");
quickSortButton.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    await quickSort(ele, l, r);
});
