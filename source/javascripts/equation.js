//Created Yunfeng Wang 7/2/2025
//Class to manage equation input, string display, and symbol stack

//Edited Sam Cubberly 7/3 - Added the compute function and the innerPar function

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

  //Author Sam Cubberly 7/3/2025
  //Compute the equation and return a float equivalent to the equation
  function compute(arr){
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
  //Find the inner most set of parenthesis, and then returns the indices of the open and closed
  //parenthesis as [ open , closed ]
  function innerPar(arr){
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

}
