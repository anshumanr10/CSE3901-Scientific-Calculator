//Created Yunfeng Wang 7/2/2025
// Math class for scientific functions like square root and powers
//Edited Oliver Shen 7/3/2025
// Math class for more scientific functions 

function MathFunction() {

  // Author Yunfeng Wang 7/2/2025
  // Calculates the exponent-th root of num
  MathFunction.prototype.squareRoot = function(num, exponent) {
    return Math.pow(num, 1 / exponent);
  }
  
  // Author Yunfeng Wang 7/2/2025
  // Calculates the square of a number
  MathFunction.prototype.squared = function(num) {
    return Math.pow(num, 2);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates x^y
  MathFunction.prototype.power = function(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates 10^x
  MathFunction.prototype.tenPower = function(num) {
    return Math.pow(10, num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates log(x)
  MathFunction.prototype.log10 = function(num) {
    return Math.log10(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates ln(x)
 MathFunction.prototype.ln = function(num) {
    return Math.log(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates 1/x
  MathFunction.prototype.reciprocal = function(num) {
    return 1 / num;
  }
  
  // Author Oliver Shen 7/3/2025
  // Calculates |x|
  MathFunction.prototype.abs = function(num) {
    return Math.abs(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates exp(x)
  MathFunction.prototype.exp = function(num) {
    return Math.exp(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates mod
  MathFunction.prototype.mod = function(dividend, divisor) {
    return dividend % divisor;
  }

  // Author Oliver Shen 7/3/2025
  // Calculates n!
  MathFunction.prototype.factorial = function(num) {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
