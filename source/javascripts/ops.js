// @author Oliver Shen
// @created 7/5/2025
// @description Handles operator buttons (+, -, *, /) and updates the display

document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('#screen p');
    const opsButtons = document.querySelectorAll("button.operator");

    opsButtons.forEach((button) => {
        button.addEventListener("click", () => handleOpsButtonClick(button));
    });

    function handleOpsButtonClick(button) {
        const value = button.getAttribute("data-value");
        // Adding operators to expressions
        expression.add_op(value);
        // Update display
        display.textContent = expression.to_s();
    }
});