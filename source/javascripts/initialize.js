//Created Sam Cubberly 7 / 8
//Merges all of the classes
//Created Oliver Shen 7 / 9
//merged the function and opertaion(+ - * /) button interact to here 
//merge function from interaction.js here by Yunfeng Wang 7/9/2025
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
                display.textContent = (0)
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
            addToHistory(expression);
            activateHistoryButtons(display, expression);
			}
		}catch(err){
			alert(err.message);
			alert("Syntax Error!");
			alert(err.message);
		}
	});

	document.getElementById("clearButton").addEventListener("click", function() {
		expression.equation = [];
		console.log("clear button");
		console.log(expression.equation);
		display.textContent = (expression.to_s());
        });

	document.getElementById("deleteButton").addEventListener("click", function(){
		expression.rem_op();
		console.log("delete button");
                console.log(expression.equation);
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

	parenthesisFunction = document.querySelectorAll("button.parenthesis");
	parenthesisFunction.forEach((parenthesis) => {
		parenthesis.addEventListener("click", function(){
			expression.add_op( parenthesis.getAttribute("data-value") );
			display.textContent = (expression.to_s());
		});
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
	const display = document.querySelector('#screen p');
	display.textContent = (expression.to_s()) + " = " + val;
}

//Yunfeng Wang 7/9/2025
//Merged from interaction.js
// Update the calculator's display screen with the current equation.
// Falls back to showing the current tokens if no override text is provided.
function updateDisplay() {
    const screen = document.getElementById("screen");
    if (screen) {
        screen.innerText = expression.to_s();
    }
}

// Show the memory panel and hide the history panel, typically triggered by the "Memory" button.
function showMemory() {
    const memory = document.getElementById("memory");
    const history = document.getElementById("history");
    if (memory && history) {
        memory.classList.remove("hidden");
        history.classList.add("hidden");
    }
}

// Show the history panel and hide the memory panel, typically triggered by the "History" button.
function showHistory() {
    const memory = document.getElementById("memory");
    const history = document.getElementById("history");
    if (memory && history) {
        memory.classList.add("hidden");
        history.classList.remove("hidden");
    }
}

/*
//Toggle collapsed/expanded for any panel with a toggle tab
function toggleSidePanel() {
    const panel = document.getElementById("side-panel");
    const tab = panel.querySelector(".toggle-tab");
    panel.classList.toggle("collapsed");
    tab.textContent = panel.classList.contains("collapsed") ? "▶" : "◀";
}
*/ 

// Expose toggle functions globally if needed (for inline onclick="")
window.showMemory = showMemory;
window.showHistory = showHistory;


// Memory Button Handling 
const memoryButtons = document.querySelectorAll("button.memory-control");
const memoryObj = new Memory();

memoryButtons.forEach((button) => {
  const action = button.getAttribute("data-action");
  button.addEventListener("click", () => {
    const exprStr = expression.to_s();
    expression.computeTop(); // upadte expression value
    addToHistory(expression);
    const equalsStr = expression.equals; // current value
    const currentVal = parseFloat(equalsStr);

    console.log(`Memory button clicked: ${action}, currentVal: ${currentVal}`);
    switch (action) {
        case "MC":
            memoryObj.clear_memory();
            break;
        case "MR":
            break;
        case "M+":
            memoryObj.add_memory(currentVal);
            break;
        case "M-":
            memoryObj.subtract_memory(currentVal);
            break;
        case "MS":
            memoryObj.save_memory(currentVal);
            break;
        }

    // update display
    const memoryDisplay = document.getElementById("memory-display");
    document.getElementById("memory-display").textContent = memoryObj.recover_memory();
    if (memoryDisplay) {
      memoryDisplay.textContent = memoryObj.recover_memory();
    }
  });
});
// End of Memory Button Handling 
//End of Yunfeng Wang's part