//Created Yunfeng Wang 7/2/2025
//Class to manage equation input, string display, and symbol stack

//Edited Sam Cubberly 7/3 - Added the compute function and the innerPar function

//Edited Oliver Shen 7/9 - Edited the to_s to returns a math expression string for display.

//Edited Sam Cubberly 7/9 added the equals value
function Equation() {
	this.equation = [];
	this.equals = 0;
}

// Author Yunfeng Wang 7/2/2025
// Add any object (number, operator, function) to the equation array
Equation.prototype.add_op = function(obj) {
  this.equation.push(obj);
}

//Authro Yunfeng Wang 7/2/2025
// Remove last element, which is used for backspace
Equation.prototype.rem_op = function() {
  this.equation.pop();
}

//Author Yunfeng Wang 7/2/2025
// Convert the array into a display string
// edit Yunfeng Wang, remove space between elements.
// edit Oliver Shen 7/9/2025
// Returns a math expression string for display.
// Maps functions to symbols, formats commas and brackets.
Equation.prototype.to_s = function() {
  return this.equation.map(token => {
      if (typeof token === "function") return funcDisplayName.get(token) || "fn";
      if (token === ",") return ", ";
      return token;
  }).join(" ")
    .replace(/\s+,/g, ",")
    .replace(/,\s+/g, ", ")
    .replace(/\s+\]/g, "]")
    .replace(/\[\s+/g, "[");
}

  //Author Sam Cubberly 7/8/2025
  //Utilizes this.equation  array with:
  //	functions as obj func ==> [ sqrt , "[" , arg1 , "," , arg2 , "]" ]
  //	integers as multiple integers ==> [ 8 , 2 ] = 82
  //	floats as multiple integers separated by a period ==> [ 1 , "." , 3 ] = 1.3
  //Change the value of this.equals to the computed value of the equation
  //this.equation doesn't change
  Equation.prototype.computeTop = function() {
	arr = this.equation.slice();
	//Add function to get rid of integers and floats
  	arr = parseNumbers(arr)
	//Function to get rid of functions
	removeFuncs(arr);
	//Complete PEMDAS
	this.equals = compute(arr);
}

//Author Sam Cubberly 7/9/2025
//Removes functions from the arr
//	Requires that functions are in the form: 
//	[ ... , func , "[" , {expr} , "]" , ... ] 
//	Or [ ... , func , "[" , {expr} , "," , {expr} , "]" , ... ] 
//Returns arr as
//	 [ ... , {valueOfFunc} , ... ]
function removeFuncs(arr){
  //Left bracket indicates a function is 1 index before it
  while( arr.indexOf("[") != -1 ){
    indexes = innerBracket(arr); // ==> returns [ leftBracketIndex , commaIndex , rightBracketIndex ]
      if( indexes[1] < indexes[2] && indexes[1] > indexes[0] ){ // ==>  comma between brackets means 2 args
        rightEquation = compute(arr.slice(indexes[1] + 1, indexes[2]));
        leftEquation =  compute(arr.slice(indexes[0] + 1, indexes[1]));
        funcVal = arr[indexes[0] - 1](leftEquation, rightEquation);
        arr.splice( indexes[0] - 1, indexes[2] - indexes[0] + 2, funcVal );
      }else{ // ==> 1 arg
        equation = compute(arr.slice(indexes[0] + 1, indexes[2]));
        funcVal = arr[indexes[0] -1](equation);
        arr.splice(indexes[0]-1, indexes[2] - indexes[0] + 2, funcVal);
      }
  }
  return arr;
}

//Author Sam Cubberly 7/9/2025
//Finds the innermost set of brackets, finding the innermost functino
//	returns [ leftBracketIndex , commaIndex , rightBracketIndex ]
//		commaIndex is not between left and right if 1 argument
//	returns 1 if no function is present
function innerBracket(arr){
  leftIndex = -1;
  comma = -1;
    for( i = 0 ; i < arr.length ; i++ ){
      switch(arr[i]){
        case "[":
          leftIndex = i;
          break;
        case ",":
          comma = i;
          break;
        case "]":
          return [leftIndex, comma , i];
      }
    }
    return -1;
  }

//Author Sam Cubberly 7/3/2025
//Compute the PEMDAS equation and return a float equivalent to the equation
//	Args arr <array> contains equation
//	Requires that all functions and Numbers are out of string form
//Returns arr[0], after recursion, returning float
function compute(arr){
  if( arr.length == 1 ){
    return arr[0];
  }
  if(arr.indexOf("(") != -1){ //Go through smallest set of parentheses first
    indexes = innerPar(arr);
    arr.splice(indexes[0], indexes[1] - indexes[0] + 1, compute(arr.slice(indexes[0] + 1, indexes[1]))); //replace innermost parenthesis
    return compute(arr);
  }else{
    while(arr.indexOf("^") != -1 ){ // ==> exponent comes first, iterate until no exponents exist
      exp = arr.indexOf("^");
      replaceValue = arr[exp - 1] ** arr[exp+1];
      arr.splice(exp - 1, exp + 2, replaceValue);
    }

    while(arr.indexOf("*") != -1 || arr.indexOf("/") != -1){ // ==> MD comes next, iterate until no MD left, left to right
      multOpIndex = arr.indexOf("*");
      divOpIndex = arr.indexOf("/");

      if( (multOpIndex < divOpIndex && multOpIndex != -1) || divOpIndex == -1 ){ //If multiplication comes first
        exp = arr.indexOf("*");
        replaceValue = arr[exp - 1] * arr[exp+1];
        arr.splice(exp - 1, exp + 2, replaceValue);
      }else{ //If division comes first
        exp = arr.indexOf("/");
        replaceValue = arr[exp - 1] / arr[exp+1];
        arr.splice(exp - 1, exp + 2, replaceValue);
      }
  }

    while(arr.indexOf("+") != -1 || arr.indexOf("-") != -1){ // ==> AS comes las, iterate until no AS left
      addOpIndex = arr.indexOf("+");
      subOpIndex = arr.indexOf("-");

      if( (addOpIndex < subOpIndex && addOpIndex != -1) || subOpIndex == -1 ){ //If add is first
        exp = addOpIndex;
        replaceValue = arr[exp - 1] + arr[exp+1];
        arr.splice(exp - 1, exp + 2, replaceValue);
      }else{ //if subtraction is first
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
//parenthesis as [ openIndex , closedIndex ]
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

//@author Anshuman Ranjan
//@created 7/4/25
//@description parse the array to find consecutive numbers w/ decimals and negators to create a float value
function parseNumbers(arr) {
  console.log(arr);
  let buffer = "";

  const result = arr.reduce((accumulator, token, i) => {

    if (Number.isInteger(token)) {token = token.toString()}

    const prev = arr[i-1] || null;
    const next = arr[i+1] || null;

    switch (true) {
      case ( (token === "-") && (i === 0 || ["+", "-", "*", "/", "("].includes(prev)) && /^[0-9.]$/.test(next) ):
        buffer = "-";
        break;

      case ( (/^[0-9]$/.test(token)) || (token === ".") ) :
        buffer += token;
        break;

      default:
        if (buffer) {
          accumulator.push(parseFloat(buffer));
          buffer = "";
        }
        accumulator.push(token);
        break;
    }
    return accumulator;
  }, []);

  if (buffer) {
    result.push(parseFloat(buffer));
  }
	return result;
}

