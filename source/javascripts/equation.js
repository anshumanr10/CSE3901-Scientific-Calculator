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


// Author Yunfeng Wang 7/2/2025
// notes: created squared: x² (postfix) and sqrt: √[ ... ] method
// Edited Oliver Shen 7/3/2025
// notes: Added more methods except sqrt and squared, then combined them together as a function
Equation.prototype.computeWithMoreMethod = function(arr) {
    // Author Yunfeng Wang 7/2/2025
    // squared: x² (postfix)
    while (arr.indexOf("^2") !== -1) {
        let idx = arr.indexOf("^2");
        arr.splice(idx - 1, 2, Math.pow(arr[idx - 1], 2));
    }

    // factorial: n! (postfix) We do not have factorial method in JavaScript Math libarary
    while (arr.indexOf("!") !== -1) {
        let idx = arr.indexOf("!");
        let n = arr[idx - 1];
        if (n < 0) arr.splice(idx - 1, 2, NaN);
        else if (n === 0 || n === 1) arr.splice(idx - 1, 2, 1);
        else {
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            arr.splice(idx - 1, 2, result);
        }
    }
    // absolute value: |x| (postfix, usually | at start and end)
    while (arr.indexOf("|") !== -1) {
        let open = arr.indexOf("|");
        let close = arr.indexOf("|", open + 1);
        if (close === -1) break; // unmatched
        let param = arr.slice(open + 1, close);
        let val = this.computeWithMoreMethod(param);
        arr.splice(open, close - open + 1, Math.abs(val));
    }

    // Author Yunfeng Wang 7/2/2025
    // notes: Calculates the exponent-th root of num - sqrt: √[ ... ],
    while (arr.indexOf("√") !== -1) {
        let idx = arr.indexOf("√");
        if (arr[idx + 1] === "[") {
            let end = findMatchingBracket(arr, idx + 1);
            let param = arr.slice(idx + 2, end);
            let val = this.computeWithMoreMethod(param);
            arr.splice(idx, end - idx + 1, Math.sqrt(val));
        } else {
            // fallback for √x
            arr.splice(idx, 2, Math.sqrt(arr[idx + 1]));
        }
    }
    // exp: exp[ ... ]
    while (arr.indexOf("exp") !== -1) {
        let idx = arr.indexOf("exp");
        if (arr[idx + 1] === "[") {
            let end = findMatchingBracket(arr, idx + 1);
            let param = arr.slice(idx + 2, end);
            let val = this.computeWithMoreMethod(param);
            arr.splice(idx, end - idx + 1, Math.exp(val));
        }
    }
    // 10^: 10^[ ... ]
    while (arr.indexOf("10^") !== -1) {
        let idx = arr.indexOf("10^");
        if (arr[idx + 1] === "[") {
            let end = findMatchingBracket(arr, idx + 1);
            let param = arr.slice(idx + 2, end);
            let val = this.computeWithMoreMethod(param);
            arr.splice(idx, end - idx + 1, Math.pow(10, val));
        }
    }
    // 1/: 1/[ ... ]
    while (arr.indexOf("1/") !== -1) {
        let idx = arr.indexOf("1/");
        if (arr[idx + 1] === "[") {
            let end = findMatchingBracket(arr, idx + 1);
            let param = arr.slice(idx + 2, end);
            let val = this.computeWithMoreMethod(param);
            arr.splice(idx, end - idx + 1, 1 / val);
        }
    }
    // ^: x^[ ... ]
    while (arr.indexOf("^") !== -1) {
        let idx = arr.indexOf("^");
        if (arr[idx + 1] === "[") {
            let end = findMatchingBracket(arr, idx + 1);
            let param = arr.slice(idx + 2, end);
            let val = this.computeWithMoreMethod(param);
            arr.splice(idx - 1, end - idx + 2, Math.pow(arr[idx - 1], val));
        }
    }
    // log: log[ ... ]
    while (arr.indexOf("log") !== -1) {
        let idx = arr.indexOf("log");
        if (arr[idx + 1] === "[") {
            let end = findMatchingBracket(arr, idx + 1);
            let param = arr.slice(idx + 2, end);
            let val = this.computeWithMoreMethod(param);
            let result = (typeof Math.log10 === "function") ? Math.log10(val) : Math.log(val) / Math.LN10;
            arr.splice(idx, end - idx + 1, result);
        }
    }
    // ln: ln[ ... ]
    while (arr.indexOf("ln") !== -1) {
        let idx = arr.indexOf("ln");
        if (arr[idx + 1] === "[") {
            let end = findMatchingBracket(arr, idx + 1);
            let param = arr.slice(idx + 2, end);
            let val = this.computeWithMoreMethod(param);
            arr.splice(idx, end - idx + 1, Math.log(val));
        }
    }
    // mod: x mod y 
    while (arr.indexOf("mod") !== -1) {
        let idx = arr.indexOf("mod");
        arr.splice(idx - 1, 3, arr[idx - 1] % arr[idx + 1]);
    }

function findMatchingBracket(arr, openIdx) {
    let depth = 0;
    for (let i = openIdx; i < arr.length; i++) {
        if (arr[i] === "[") depth++;
        if (arr[i] === "]") depth--;
        if (depth === 0) return i;
    }
    return -1;
}
}
