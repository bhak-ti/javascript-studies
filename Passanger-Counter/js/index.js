let saveEl = document.getElementById("save-el")
console.log(saveEl);
let countEl = document.getElementById("count-el")
console.log(countEl);

let count = 0;

function increment()
{
    count += + 1;
    countEl.innerText = count
}   

function save() 
{
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count);    
}

function reset() 
{
    count = 0;
    countEl.innerText = count
}