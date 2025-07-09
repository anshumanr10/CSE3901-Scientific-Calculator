/*@author Anshuman Ranjan
 *@created 7/9/25
 *@description A global-level array that tracks the history of all the equations/solutions the Calculator app evalutes
 *                The functions are used to manipulate the array and dynamically generate buttons for each of the 
 */

// global history array
const history = [];

// modifies the global-level history array to include an equation instance that was evaluted by the app.
function addToHistory(eq) {

    history.push(eq);
    const historyDiv = document.getElementById("history");

    // Create a container for the button pair
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("history-entry");

    // --- Button 1: Show Equation ---
    const equationButton = document.createElement("button");
    equationButton.innerText = eq.to_s(); // Label = "3 + 5", for example
    equationButton.addEventListener("click", () => {
        alert("Equation: " + eq.to_s()); //JUST FOR TESTING --------------------DELETE
    });

    // --- Button 2: Show Result ---
    const resultButton = document.createElement("button");
    resultButton.innerText = eq.equals; // Label = "8", for example
    resultButton.addEventListener("click", () => {
    alert("Result: " + eq.equals); //JUST FOR TESTING --------------------DELETE
    });

    // Optional: style buttons and container
    equationButton.style.margin = "4px";
    resultButton.style.margin = "4px";
    entryDiv.style.marginBottom = "8px";

    // Add both buttons to the entry container
    entryDiv.appendChild(equationButton);
    entryDiv.appendChild(resultButton);

    // Append the entry container to the history div
    historyDiv.appendChild(entryDiv);
}