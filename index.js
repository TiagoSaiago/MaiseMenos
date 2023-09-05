let mainNumber = document.getElementById('mainNumber');
let increaseBtn = document.getElementById('increaseBtn');

increaseBtn.addEventListener("click", increase);

function increase() {
    let mainNumber = document.getElementById('mainNumber');
    let currentNumber = Number(mainNumber.innerText);
    let newNumber = currentNumber + 1;
    mainNumber.innerText = newNumber;
  }
  
  function reset() {
    let mainNumber = document.getElementById('mainNumber');
    mainNumber.innerText = 0;
  }
  
  function decrease() {
    let mainNumber = document.getElementById('mainNumber');
    let currentNumber = Number(mainNumber.innerText);
    let newNumber = currentNumber - 1;
    mainNumber.innerText = newNumber;
  }
  