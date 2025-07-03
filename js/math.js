//Created Yunfeng Wang 7/2/2025
// Math class for scientific functions like square root and powers

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
}
