//@author Anshuman Ranjan
//@created 7/4/25
//@description Gets all the number buttons on the screen to update the display


// Declare a new object that will hold the current expression being input using buttons
const expression = new Equation();

//
document.addEventListener("DOMContentLoaded", function() {
    //defines what tag in the HTML contains the display output
    const display = document.querySelector('#screen p');

    //For all the number buttons, calls the handleButtonClick function when the button is clicked
    const numButtons = document.querySelectorAll("button.number, button.negator, button.decimal, button.clear");
    numButtons.forEach( (button) => {button.addEventListener("click", () => handleButtonClick(button))})

    function handleButtonClick(button) {
        const value = button.getAttribute("data-value");
        const button_class = button.getAttribute("class");
        console.log("You Clicked a button!")
                
        //All cases simply add the value to the expression and update display, will modify if needed
        switch (button_class) {
            case "number":
                console.log("Entered the number statement");
                expression.add_op(value)
                display.textContent = (expression.to_s())
                break;
            case "negator":
                console.log("Entered the negator statement");
                expression.add_op(value)
                display.textContent = (expression.to_s())
                break;
            case "decimal":
                console.log("Entered the decimal statement");
                expression.add_op(value)
                display.textContent = (expression.to_s())
                break;
            case "clear":
                console.log("Entered the clear statement");
                while (expression.to_s().length > 0) {
                    console.log(expression.to_s().length);
                    expression.rem_op();
                }
                display.textContent = (expression.to_s())
                break;
            default:
                console.log("INVALID BUTTON PRESSED, NO CHANGE TO DISPLAY");
        }
    }
})