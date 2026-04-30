/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        – sum two numbers (a + b)
 *   subtract   – find the difference between two numbers (a - b)
 *   multiply   – compute the product of two numbers (a * b)
 *   divide     – divide two numbers (a / b), with division-by-zero protection
 *   modulo     – remainder of a divided by b (a % b)
 *   power      – base raised to the exponent (base ^ exponent)
 *   squareRoot – square root of n (single operand)
 *
 * Usage:
 *   node calculator.js <operation> <a> [b]
 *
 * Examples:
 *   node calculator.js add 5 3          => 8
 *   node calculator.js subtract 9 4     => 5
 *   node calculator.js multiply 3 7     => 21
 *   node calculator.js divide 10 2      => 5
 *   node calculator.js modulo 10 3      => 1
 *   node calculator.js power 2 8        => 256
 *   node calculator.js squareRoot 16    => 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a and b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point — only runs when executed directly (not when required by tests)
if (require.main === module) {
const [, , operation, rawA, rawB] = process.argv;

if (!operation || rawA === undefined) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <a> [b]');
  process.exit(1);
}

const a = parseFloat(rawA);
const b = rawB !== undefined ? parseFloat(rawB) : undefined;

if (isNaN(a) || (rawB !== undefined && isNaN(b))) {
  console.error('Error: Operands must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    case 'modulo':
      result = modulo(a, b);
      break;
    case 'power':
      result = power(a, b);
      break;
    case 'squareRoot':
      result = squareRoot(a);
      break;
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
      process.exit(1);
  }
  console.log(result);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
}
