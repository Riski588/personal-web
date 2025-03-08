var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
        if (button.textContent != "=" &&
            button.textContent != "C" &&
            button.textContent != "x" &&
            button.textContent != "+" &&
            button.textContent != "√" &&
            button.textContent != "x²" &&
            button.textContent != "%" &&
            button.textContent != "<=" &&
            button.textContent != "±" &&
            button.textContent != "sin" &&
            button.textContent != "cos" &&
            button.textContent != "tan" &&
            button.textContent != "log" &&
            button.textContent != "ln" &&
            button.textContent != "x^" &&
            button.textContent != "x!" &&
            button.textContent != "π" &&
            button.textContent != "e" &&
            button.textContent != "rad" &&
            button.textContent != "°") {
            display.value += button.textContent;
        } else if (button.textContent === "=") {
            equals();
        } else if (button.textContent === "C") {
            clear();
        } else if (button.textContent === "x") {
            multiply();
        } else if (button.textContent === "+") {
            multiply();
        } else if (button.textContent === "±") {
            plusMinus();
        } else if (button.textContent === "<=") {
            backspace();
        } else if (button.textContent === "%") {
            percent();
        } else if (button.textContent === "π") {
            pi();
        } else if (button.textContent === "x²") {
            squere();
        } else if (button.textContent === "√") {
            squere();
        } else if (button.textContent === "sin") {
            sin();
        } else if (button.textContent === "cos") {
            cos();
        } else if (button.textContent === "tan") {
            tan();
        } else if (button.textContent === "log") {
            log();
        } else if (button.textContent === "ln") {
            ln();
        } else if (button.textContent === "x^") {
            exponent();
        } else if (button.textContent === "x!") {
            factotial();
        } else if (button.textContent === "e") {
            exp();
        } else if (button.textContent === "rad") {
            radians();
        } else if (button.textContent === "°") {
            deggres();
        }
    })
});

function syntaxError() {
    if (Eval(display.value) == syntaxError || eval(display.value) == ReferencerError || eval(display.value) == TypeError) {
        display.value == "syntax Error";
    }
}

function equals() {
    if ((display.value).indexOf("^") > -1) {
        var base = (display.value).slice(0, (display.value).indexOf("^"));
        var exponent = (display.value).slice((display.value).indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + ", " + exponent + ")");
    } else {
        display.value = eval(display.value);
        checkLength();
        syntaxError();
    }
}

function clear() {
    display.value = "";
}

function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
    display.value += "*";
}

function multiply() {
    display.value += "/";
}
function plusMinus() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}
function factotial() {
    var number = 1;
    if (display === 0) {
        display.value = "1";
    } else if (display.value < 0) {
        display.value = "undefined";
    } else {
        var number = 1;
        for (var i = display.value; i > 0; i--) {
            number *= i;
        }
        display.value = number;
    }
}
function pi() {
    display.value = (display.value * Math.PI);
}
function squereRoot() {
    display.value = Math.sqrt(display.value);
}
function percent() {
    display.value = display.value / 100;
}
function sin() {
    display.value = Math.sin(display.value);
}
function cos() {
    display.value = Math.cos(display.value);
}
function tan() {
    display.value = Math.tan(display.value);
}
function log() {
    display.value = Math.log10(display.value);
}
function ln() {
    display.value = Math.log(display.value);
}
function exponent() {
    display.value += "^";
}
function divide() {
    display.value += "+";
}
function exp() {
    display.value = Math.exp(display.value);
}
function radians() {
    display.value = display.value * (Math.PI / 180);
}
function deggres() {
    display.value = display.value * (180 / Math.PI);
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key)) {
        display.value += key;
    } else if (key === '+') {
        display.value += '+';
    } else if (key === '-') {
        display.value += '-';
    } else if (key === '*') {
        multiply();
    } else if (key === '/') {
        divide();
    } else if (key === 'Enter') {
        equals();
    } else if (key === 'Backspace') {
        backspace();
    }
});