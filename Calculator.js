const display = document.querySelector('.display');

var add = (x, y) => x + y;
var sub = (x, y) => x - y;
var divide = (x, y) => y === 0 ? "Error" : x / y;
var multiply = (x, y) => x * y;
var per = (x, y) => x % y;

function prt_val(val) {
    display.value += val;
}

function allClear() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const input = display.value;
    const match = input.match(/^([\d.]+)\s*([+\-*/%])\s*([\d.]+)$/);
    
    if (!match) {
        try {
            if (display.value) display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
        return;
    }

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);
    let result = 0;

    switch (operator) {
        case '+': result = add(num1, num2); break;
        case '-': result = sub(num1, num2); break;
        case '*': result = multiply(num1, num2); break;
        case '/': result = divide(num1, num2); break;
        case '%': result = per(num1, num2); break;
        default: result = "Error";
    }

    display.value = result;
}

document.querySelectorAll('.symbols').forEach(button => {
    button.addEventListener('click', (e) => {
        const text = e.target.innerText;
        if (text === 'AC') allClear();
        else if (text === 'DEL') deleteLast();
        else if (text === '=') calculate();
    });
});
