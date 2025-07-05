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
        // add equation
        expression.add_op(value);
        // update disply
        display.textContent = expression.to_s();
    }
});
