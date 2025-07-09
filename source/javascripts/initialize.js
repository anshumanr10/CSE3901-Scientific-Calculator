//Created Sam Cubberly 7 / 8
//Merges all of the classes
//Created Oliver Shen 7 / 9
//merged the function and opertaion(+ - * /) button interact to here 

//@author Anshuman Ranjan
//@created 7/9/25
//@description Gets all the buttons on the screen to update the display
const expression = new Equation();

document.addEventListener("DOMContentLoaded", function() {
	
	//display component: CALLED BY ALL TEAM MEMBER'S CODE
	const display = document.querySelector('#screen p');

    //Create components for all the number buttons, decimal button, and negator button.
	//@uses handleButtonClick function when the button is clicked
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

	//Sam's Contributions -- Please don't alter or delete without getting my permission
	document.getElementById("equalButton").addEventListener("click", function() {
		try{
        		expression.computeTop()
			if( isNaN(expression.equals) ){
				alert("Syntax Error!");
			}else{
			showEqual(expression.equals);  //test
			}
		}catch(err){
			alert("Syntax Error!");
			alert(err.message);
		}
	});

	document.getElementById("clearButton").addEventListener("click", function() {
		expression.equation = [];
		display.textContent = (expression.to_s());
        });

	document.getElementById("deleteButton").addEventListener("click", function(){
		expression.rem_op();
		display.textContent = (expression.to_s());
	});

	document.getElementById("menuButton").addEventListener("click", function(){
		menuText = document.getElementsByClassName("syntaxmenu")[0];
		if( menuText.classList.contains("hiddenMenu") ){
			menuText.classList.remove("hiddenMenu");
		}else{
			menuText.classList.add("hiddenMenu");
		}
	});
	//End of Sam's contributions

	//Added by Oliver Shen 7/9 
	//merged the function button interact to here from funcs.js
    const funcButtons = document.querySelectorAll("button.function");
    funcButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            if (funcMap[value]) {
                expression.add_op(funcMap[value]);
                expression.add_op("[");
            } else if (value === ",") {
                expression.add_op(",");
            } else {
                expression.add_op(value);
            }
            display.textContent = (expression.to_s());
        });
    });

	//Added by Oliver Shen 7/9 
	//Operator buttons (+ - * /) 
    const opsButtons = document.querySelectorAll("button.operator");
    opsButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            expression.add_op(value);        
            display.textContent = (expression.to_s());
        });
    });
});

//Sam Cubberly
function showEqual(val){
	screen = document.getElementById("screen");
	screen.innerText = expression.to_s() + " = " + val;
}
