// TO DO
const numberInput = document.getElementById('number-input');
const addNumberBtn = document.getElementById('add-number-btn');
const sortOneBtn = document.getElementById('sort-one-btn');
const sortAllBtn = document.getElementById('sort-all-btn');
const numberBank = document.getElementById('number-bank');
const oddNumbers = document.getElementById('odd-numbers');
const evenNumbers = document.getElementById('even-numbers');

let numbers = [];

function updateNumberBank() {
    numberBank.innerHTML = numbers.join(', ');
}

function addNumber() {
    const input = numberInput.value.trim();
    const parsedNumber = parseInt(input, 10);

    if (!isNaN(parsedNumber)) {
        numbers.push(parsedNumber);
        updateNumberBank();
    }

    numberInput.value = '';
}

function sortOne() {
    if (numbers.length > 0) {
        const numToSort = numbers.shift(); 
        if (numToSort % 2 === 0) {
            evenNumbers.innerHTML += numToSort + ' ';
        } else {
            oddNumbers.innerHTML += numToSort + ' ';
        }
        updateNumberBank();
    }
}

function sortAll() {
    while (numbers.length > 0) {
        sortOne();
    }
}

addNumberBtn.addEventListener('click', addNumber);
sortOneBtn.addEventListener('click', sortOne);
sortAllBtn.addEventListener('click', sortAll);

