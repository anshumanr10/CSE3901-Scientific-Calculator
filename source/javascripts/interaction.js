// Created by Yunfeng Wang 7/3/2025
// Main logic for scientific calculator interaction using custom Equation class

// Instantiate the global Equation object
const eq = new Equation();
/**
 * Wait until the DOM is fully loaded before attaching event listeners, select all <button> elements on the page, and handle interactions accordingly.
 */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    const value = button.dataset.value;

    // Skip buttons without a data-value attribute
    if (!value) return;

    button.addEventListener("click", () => {
      switch (value) {
        case "=":
          const result = compute(eq.equation);
          eq.equation = [result];
          break;
        case "C":
          eq.equation = [];
          break;
        case "⌫":
          eq.rem_op();
          break;
        default:
          eq.add_op(value);
      }

      updateDisplay();
    });
  });
});

/**
 * Update the calculator's display screen with the current equation. Falls back to showing the current tokens if no override text is provided.
 */
function updateDisplay() {
  const screen = document.getElementById("screen");
  if (screen) {
    screen.innerText = eq.to_s();
  }
}

/**
 * Show the memory panel and hide the history panel, typically triggered by the "Memory" button.
 */
function showMemory() {
  const memory = document.getElementById("memory");
  const history = document.getElementById("history");
  if (memory && history) {
    memory.classList.remove("hidden");
    history.classList.add("hidden");
  }
}

//probably overlap here marked 

/**
 * Show the history panel and hide the memory panel, tssypically triggered by the "History" button.
 */
function showHistory() {
  const memory = document.getElementById("memory");
  const history = document.getElementById("history");
  if (memory && history) {
    history.classList.remove("hidden");
    memory.classList.add("hidden");
  }
}

//use a grid for this function maybe. or refactor ? maybe? 

// Expose toggle functions globally for inline <button onclick=""> use
window.showMemory = showMemory;
window.showHistory = showHistory;
