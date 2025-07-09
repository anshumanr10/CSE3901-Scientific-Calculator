/*@author Anshuman Ranjan
 *@created 7/9/25
 *@description A global-level array that tracks the history of all the equations/solutions the Calculator app evalutes
 *                The functions are used to manipulate the array and dynamically generate buttons for each of the 
 */

// global history array
const history = [];

// modifies the global-level history array to include an equation instance that was evaluted by the app.
function addToHistory(expression) {

    history.push(expression);
    const historyDiv = document.getElementById("history");
    const display = document.querySelector('#screen p');

    // Create a container for the button pair
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("history-entry");

    // --- Button 1: Show Equation ---
    const equationButton = document.createElement("button");
    equationButton.innerText = expression.to_s(); // Label = "3 + 5", for example
    equationButton.addEventListener("click", () => {
        display.textContent = (expression.to_s())
    });

    // --- Button 2: Show Result ---
    const resultButton = document.createElement("button");
    resultButton.innerText = expression.equals; // Label = "8", for example
    resultButton.addEventListener("click", () => {
        display.textContent = (expression.to_s())
    });

    // Add both buttons to the entry container
    entryDiv.appendChild(equationButton);
    entryDiv.appendChild(resultButton);

    // Append the entry container to the history div
    historyDiv.appendChild(entryDiv);
}