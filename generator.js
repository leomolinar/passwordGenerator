const checkbox_numbers   = document.getElementById('numbers')
const checkbox_uppercase = document.getElementById('uppercase')
const checkbox_lowercase = document.getElementById('lowercase')
const checkbox_symbols   = document.getElementById('symbols')
const checkbox_length    = document.getElementById('length')
const textbox_result     = document.getElementById('result')
const click_generate     = document.getElementById('generate')
const click_clipboard    = document.getElementById('clipboard')

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function randomSymbol() {
    const symbols = '!@#$%¨&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random()*symbols.length)]
}

function randomGenerator(useNumber, useUpper, useLower, useSymbol, size) {
    var result = '';
    var random;
    for (var i = 0; i < size;) {
        random = Math.floor(Math.random() * 4);
        if (random === 0 && useNumber === true) {
            result += randomNumber();
            i++;
        }
        if (random === 1 && useUpper === true) {
            result += randomUpper();
            i++;
        }
        if (random === 2 && useLower === true) {
            result += randomLower();
            i++;
        }
        if (random === 3 && useSymbol === true) {
            result += randomSymbol();
            i++;
        }
    }
    textbox_result.innerText = result
}

click_generate.addEventListener('click', () => {
    var size = parseInt(checkbox_length.value);
    const useNumber = checkbox_numbers.checked;
    const useUpper = checkbox_uppercase.checked;
    const useLower = checkbox_lowercase.checked;
    const useSymbol = checkbox_symbols.checked;

    randomGenerator(useNumber, useUpper, useLower, useSymbol, size);
})

click_clipboard.addEventListener('click', () => {
    const str = document.createElement('textarea');
    str.value = textbox_result.textContent;
    document.body.appendChild(str);
    str.select();
    document.execCommand('copy');
    str.remove();
    alert('Copied to clipboard.')
})