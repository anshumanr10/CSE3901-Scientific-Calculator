// @author Oliver Shen
// @created 7/5/2025
// @description Handles function/scientific calculator buttons input and updates the display

// 1. Define all calculator function objects
function squared(x) {
    return x * x;
}
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}
function abs(x) {
    return Math.abs(x);
}
function squareRoot(x) {
    return Math.sqrt(x);
}
function exp(x) {
    return Math.exp(x);
}
function tenPower(x) {
    return Math.pow(10, x);
}
function reciprocal(x) {
    return 1 / x;
}
function power(x, y) {
    return Math.pow(x, y);
}
function log10(x) {
    return Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10;
}
function ln(x) {
    return Math.log(x);
}
function mod(x, y) {
    return x % y;
}

// 2. Map button data-value to function object
const funcMap = {
    "^2": squared,
    "!": factorial,
    "|": abs,
    "√": squareRoot,
    "exp": exp,
    "10^": tenPower,
    "1/": reciprocal,
    "^": power,
    "log": log10,
    "ln": ln,
    "mod": mod
};

// 3. List of functions that require bracketed parameters (prefix)
const needBracket = ["√", "exp", "10^", "1/", "log", "ln", "^", "mod"];

// 4. Attach listeners to all function buttons (for input building)
document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('#screen p');
    const funcButtons = document.querySelectorAll("button.function");

    funcButtons.forEach((button) => {
        button.addEventListener("click", () => handleFuncButtonClick(button));
    });

    /**
     * Handles function button click:
     * - If function requires parameter(s), push function object and a left bracket.
     * - For two-argument functions, users are expected to input arguments separated by a comma (",").
     * - For postfix/special symbols, just push the function object.
     */
    function handleFuncButtonClick(button) {
        const value = button.getAttribute("data-value");
        if (funcMap[value]) {
            expression.add_op(funcMap[value]); // Push function object (not string)
            if (needBracket.includes(value)) {
                expression.add_op("["); // Push left bracket for parameter(s)
            }
        } else if (value === ",") {
            expression.add_op(",");   // Push comma for argument separation
        } else {
            expression.add_op(value); // For symbols like "|", "EndFunc", etc.
        }
        display.textContent = expression.to_s();
    }
});