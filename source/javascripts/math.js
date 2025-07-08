//Created Yunfeng Wang 7/2/2025
// Math class for scientific functions like square root and powers
//Edited Oliver Shen 7/3/2025
// Math class for more scientific functions 

class MathFunction {

  // Author Yunfeng Wang 7/2/2025
  // Calculates the exponent-th root of num
  static squareRoot(num, exponent) {
    return Math.pow(num, 1 / exponent);
  }
  
  // Author Yunfeng Wang 7/2/2025
  // Calculates the square of a number
  static squared(num) {
    return Math.pow(num, 2);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates x^y
  static power(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates 10^x
  static tenPower(num) {
    return Math.pow(10, num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates log(x)
  static log10(num) {
    return Math.log10(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates ln(x)
  static ln(num) {
    return Math.log(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates 1/x
  static reciprocal(num) {
    return 1 / num;
  }
  
  // Author Oliver Shen 7/3/2025
  // Calculates |x|
  static abs(num) {
    return Math.abs(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates exp(x)
  static exp(num) {
    return Math.exp(num);
  }

  // Author Oliver Shen 7/3/2025
  // Calculates mod
  static mod(dividend, divisor) {
    return dividend % divisor;
  }

  // Author Oliver Shen 7/3/2025
  // Calculates n!
  static factorial(num) {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
