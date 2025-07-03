//Created Yunfeng Wang 7/2/2025
//Class to manage equation input, string display, and symbol stack

class Equation {
  constructor() {
    this.equation = [];
  }

  // Author Yunfeng Wang 7/2/2025
  // Add any object (number, operator, function) to the equation array
  add_op(obj) {
    this.equation.push(obj);
  }

  //Authro Yunfeng Wang 7/2/2025
  // Remove last element, which is used for backspace
  rem_op() {
    this.equation.pop();
  }

  //Author Yunfeng Wang 7/2/2025
  // Convert the array into a display string
  to_s() {
    return this.equation.join(" ");
  }
}