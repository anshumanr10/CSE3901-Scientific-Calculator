/*@author Anshuman Ranjan
 *@created 7/9/25
 *@description A global-level array that tracks the history of all the equations/solutions the Calculator app evalutes
 *                The functions are used to manipulate the array and dynamically generate buttons for each of the 
 */

// global history array
const history = [];

// modifies the global-level history array to include an equation instance that was evaluted by the app.
function addToHistory(expression) {

    let expression_copy = new Equation();
    expression_copy.equation = expression.equation.slice();
    expression_copy.equals = expression.equals;

    history.push(expression_copy);
    const historyDiv = document.getElementById("history");

    // Create a container for the button pair
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("history-entry");

    // --- Button 1: Show and Load Equation ---
    const equationButton = document.createElement("button");
    equationButton.innerText = expression_copy.to_s();
    equationButton.classList.add("history_equation");
    equationButton.stored_object = expression_copy;

    // --- Button 2: Show Result ---
    const resultButton = document.createElement("button");
    resultButton.innerText = expression_copy.equals;
    resultButton.classList.add("history_result");
    resultButton.stored_object = expression_copy.equals;

    // Add both buttons to the entry container
    entryDiv.appendChild(equationButton);
    entryDiv.appendChild(resultButton);

    // Append the entry container to the history div
    historyDiv.appendChild(entryDiv);

    console.log(`History Array: ${history.map(element => element.to_s()).join(", ")}`);
}

function activateHistoryButtons(display, expression) {
    const hist_equation_buttons = document.querySelectorAll("button.history_equation");
    const hist_result_buttons = document.querySelectorAll("button.history_result");
    hist_equation_buttons.forEach( (button) => {button.addEventListener("click", () => {
        expression.equation = button.stored_object.equation.slice();
        display.textContent = (button.stored_object.to_s())
    })})
    hist_result_buttons.forEach( (button) => {button.addEventListener("click", () => {
        expression.equation = button.stored_object.toString().split('');
        display.textContent = button.stored_object.toString();
    })})
}