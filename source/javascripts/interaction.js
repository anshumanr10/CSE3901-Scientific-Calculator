// Created by Yunfeng Wang 7/3/2025
// Main logic for scientific calculator interaction using custom Equation class

const eq = new Equation();

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    const value = button.dataset.value;
    if (!value) return;

    button.addEventListener("click", () => {
      if (value === "=") {
        // use compute() method from equation.js
        const result = compute(eq.equation);
        eq.equation = [result]; 
        updateDisplay();
      } else if (value === "C") {
        eq.equation = [];
        updateDisplay();
      } else if (value === "←") {
        eq.rem_op(); // delete the latest element
        updateDisplay();
      } else {
        eq.add_op(value);
        updateDisplay();
      }
    });
  });
});

// screen display update
function updateDisplay() {
  const screen = document.getElementById("screen");
  if (screen) {
    screen.innerText = eq.to_s();
  }
}

// Memory / History Toggle Functions
function showMemory() {
  const memory = document.getElementById("memory");
  const history = document.getElementById("history");
  if (memory && history) {
    memory.classList.remove("hidden");
    history.classList.add("hidden");
  }
}

function showHistory() {
  const memory = document.getElementById("memory");
  const history = document.getElementById("history");
  if (memory && history) {
    history.classList.remove("hidden");
    memory.classList.add("hidden");
  }
}

window.showMemory = showMemory;
window.showHistory = showHistory;
