//Created Yunfeng Wang 7/2/2025
// script.js
// Main logic for button interaction and screen updates


// a temporary example test: add 3 + 4 and update screen
const eq1 = new Equation(); 
eq1.add_op("3");
eq1.add_op("+");
eq1.add_op("4");
document.getElementById("screen").innerText = eq1.to_s();  

function showMemory() {
  document.getElementById("memory").classList.remove("hidden");
  document.getElementById("history").classList.add("hidden");
}

function showHistory() {
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("memory").classList.add("hidden");
}
