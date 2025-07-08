// @author Oliver Shen
// @created 7/5/2025
// @description Handles function/scientific calculator buttons input and updates the display

document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('#screen p');
    const funcButtons = document.querySelectorAll("button.function");

    funcButtons.forEach((button) => {
        button.addEventListener("click", () => handleFuncButtonClick(button));
    });

    function handleFuncButtonClick(button) {
        const value = button.getAttribute("data-value");
        switch (value) {
            case "exp":
            case "√":
            case "^":
            case "10^":
            case "log":
            case "ln":
            case "1/":
                // Functions that need square brackets for parameters
                expression.add_op(value);
                expression.add_op("[");
                display.textContent = expression.to_s();
                break;
            default:
                // Other simple functions (postfix, etc.)
                expression.add_op(value);
                display.textContent = expression.to_s();
        }
    }
});
