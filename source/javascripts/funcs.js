// Created Yunfeng Wang 7/2/2025
// Math class for scientific functions like square root and powers

// Edited Oliver Shen 7/3/2025
// Math class for more scientific functions 

// Edited Oliver Shen 7/3/2025
// description Handles function/scientific calculator buttons input and updates the display

// Edited Oliver Shen 7/9/2025
// merge all the method from the math.js to here, make the code more clearly.

// Author Yunfeng Wang 7/2/2025
// Calculates the square of a number
function squared(num) {
    return num * num;
}

// Author Yunfeng Wang 7/2/2025
// Calculates the exponent-th root of num
function squareRoot(num) {
    return Math.sqrt(num);
}

function factorial(num) {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    return result;
}

function abs(num) {
    return Math.abs(num);
}

function exp(num) {
    return Math.exp(num);
}

function tenPower(num) {
    return Math.pow(10, num);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function log10(num) {
    return Math.log10 ? Math.log10(num) : Math.log(num) / Math.LN10;
}

function ln(num) {
    return Math.log(num);
}

function mod(dividend, divisor) {
    return dividend % divisor;
}


const funcMap = {
    "squared": squared,
    "factorial": factorial,
    "abs": abs,
    "sqrt": squareRoot,
    "exp": exp,
    "tenPower": tenPower,
    "power": power,
    "log": log10,
    "ln": ln,
    "mod": mod
};

const funcDisplayName = new Map([
    [squared, "x²"],
    [factorial, "n!"],
    [abs, "|x|"],
    [squareRoot, "√x"],
    [exp, "exp"],
    [tenPower, "10ˣ"],
    [power, "xʸ"],
    [log10, "log"],
    [ln, "ln"],
    [mod, "mod"]
]);
