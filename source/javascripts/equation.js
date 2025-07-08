//Created Yunfeng Wang 7/2/2025
//Class to manage equation input, string display, and symbol stack

//Edited Sam Cubberly 7/3 - Added the compute function and the innerPar function

//Edited Oliver Shen 7/4 - Added more statements in the compute function temporary

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
  // edit Yunfeng Wang, remove space between elements.
  to_s() {
    return this.equation.join("");
  }

  //Author Sam Cubberly 7/3/2025
  //@edited Anshuman Ranjan: removed "function" token from beginning of function definition
  //Compute the equation and return a float equivalent to the equation
  compute(arr){
    if( arr.length == 1 ){
      return arr[0];
    }
    if(arr.indexOf("(") != -1){
      indexes = innerPar(arr);
      arr.splice(indexes[0], indexes[1] - indexes[0] + 1, compute(arr.slice(indexes[0] + 1, indexes[1])));
      return compute(arr);
    }else{
      while(arr.indexOf("^") != -1 ){
        exp = arr.indexOf("^");
        replaceValue = arr[exp - 1] ** arr[exp+1];
        arr.splice(exp - 1, exp + 2, replaceValue);
      }

      while(arr.indexOf("*") != -1 || arr.indexOf("/") != -1){
        multOpIndex = arr.indexOf("*");
        divOpIndex = arr.indexOf("/");

        if( (multOpIndex < divOpIndex && multOpIndex != -1) || divOpIndex == -1 ){
          exp = arr.indexOf("*");
          replaceValue = arr[exp - 1] * arr[exp+1];
          arr.splice(exp - 1, exp + 2, replaceValue);
        }else{
          exp = arr.indexOf("/");
          replaceValue = arr[exp - 1] / arr[exp+1];
          arr.splice(exp - 1, exp + 2, replaceValue);
        }
    }

      while(arr.indexOf("+") != -1 || arr.indexOf("-") != -1){
        addOpIndex = arr.indexOf("+");
        subOpIndex = arr.indexOf("-");

        if( (addOpIndex < subOpIndex && addOpIndex != -1) || subOpIndex == -1 ){
          exp = addOpIndex;
          replaceValue = arr[exp - 1] + arr[exp+1];
          arr.splice(exp - 1, exp + 2, replaceValue);
        }else{
          exp = subOpIndex;
          replaceValue = arr[exp - 1] - arr[exp+1];
          arr.splice(exp - 1, exp + 2, replaceValue);
        }
      }
    return arr[0];
    }
  }

  //Author Sam Cubberly 7/3
  //@edited Anshuman Ranjan: removed "function" token from beginning of function definition
  //Find the inner most set of parenthesis, and then returns the indices of the open and closed
  //parenthesis as [ open , closed ]
  innerPar(arr){
    leftIndex = 0;
    parList = new Array(arr.length);
    for( i = 0 ; i < arr.length ; i++ ){
      if(arr[i] == "("){
        leftIndex = i;
      }
      if(arr[i] == ")"){
        return [leftIndex, i];
      }
    }
    return -1;
  }

  //@author Anshuman Ranjan
  //@created 7/4/25
  //@description parse the array to find consecutive numbers w/ decimals and negators to create a float value
  

}

// Author Oliver Shen 7/3/2025
// need to be add after the () and before *、/、+、- in function compute after cofirming by stand up meeting
Equation.prototype.computeWithFuncs = function(arr) {
  while (arr.indexOf("squared") !== -1) {
    let idx = arr.indexOf("squared");
    arr.splice(idx - 1, 2, MathFunction.squared(arr[idx - 1]));
  }
  while (arr.indexOf("factorial") !== -1) {
    let idx = arr.indexOf("factorial");
    arr.splice(idx - 1, 2, MathFunction.factorial(arr[idx - 1]));
  }
  while (arr.indexOf("abs") !== -1) {
    let idx = arr.indexOf("abs");
    arr.splice(idx - 1, 2, MathFunction.abs(arr[idx - 1]));
  }
  while (arr.indexOf("reciprocal") !== -1) {
    let idx = arr.indexOf("reciprocal");
    arr.splice(idx - 1, 2, MathFunction.reciprocal(arr[idx - 1]));
  }
 
  while (arr.indexOf("squareRoot") !== -1) {
    let idx = arr.indexOf("squareRoot");
    arr.splice(idx - 1, 2, MathFunction.squareRoot(arr[idx - 1]));
  }
  while (arr.indexOf("log10") !== -1) {
    let idx = arr.indexOf("log10");
    arr.splice(idx - 1, 2, MathFunction.log10(arr[idx - 1]));
  }
  while (arr.indexOf("ln") !== -1) {
    let idx = arr.indexOf("ln");
    arr.splice(idx - 1, 2, MathFunction.ln(arr[idx - 1]));
  }
  while (arr.indexOf("exp") !== -1) {
    let idx = arr.indexOf("exp");
    arr.splice(idx - 1, 2, MathFunction.exp(arr[idx - 1]));
  }
  while (arr.indexOf("tenPower") !== -1) {
    let idx = arr.indexOf("tenPower");
    arr.splice(idx - 1, 2, MathFunction.tenPower(arr[idx - 1]));
  }

  while (arr.indexOf("power") !== -1) {
    let idx = arr.indexOf("power");
    arr.splice(idx - 1, 3, MathFunction.power(arr[idx - 1], arr[idx + 1]));
  }
  while (arr.indexOf("mod") !== -1) {
    let idx = arr.indexOf("mod");
    arr.splice(idx - 1, 3, MathFunction.mod(arr[idx - 1], arr[idx + 1]));
  }

}
