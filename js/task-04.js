
const buttonAdd = document.querySelector("[data-action='increment']");
const buttonRemove = document.querySelector("[data-action='decrement']");
const spanValue = document.querySelector('#value');
    
let counterValue = 0;

buttonAdd.addEventListener('click', increment)
function increment()
{
    counterValue += 1;
    
    spanValue.textContent = counterValue;
}

buttonRemove.addEventListener('click', decrement)
function decrement()
{
    counterValue -= 1;
    
    spanValue.textContent = counterValue;
}
