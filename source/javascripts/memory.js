/* Created Yunfeng Wang 7/7/2025
 * A memory storage object used in the calculator.
 * It holds a single float value in memory and provides methods to save, retrieve, add to, subtract from, and clear the memory.
 * Used in conjunction with memory control buttons: M+, M-, MR, MC, MS
 */

/*
 * Constructs a new Memory object with default value of 0.
 * @ mem (number)The stored memory value (default: 0).
 */
function Memory() {
  this.mem = 0;
}

/**
 * Saves a number into memory (replaces the current value).
 * @ number The number to store in memory.
 */
Memory.prototype.save_memory = function(number) {
  this.mem = parseFloat(number);
};

/**
 * Retrieves the current memory value.
 * returns (number) The stored memory value.
 */
Memory.prototype.recover_memory = function() {
  return this.mem;
};

/**
 * Adds a number to the current memory value.
 * @ number  The number to add to memory.
 */
Memory.prototype.add_memory = function(number) {
  this.mem += parseFloat(number);
};

/**
 * Subtracts a number from the current memory value.
 * @ number  The number to subtract from memory.
 */
Memory.prototype.subtract_memory = function(number) {
  this.mem -= parseFloat(number);
};

/**
 * Clears the memory value (sets it back to 0).
 */
Memory.prototype.clear_memory = function() {
  this.mem = 0;
};