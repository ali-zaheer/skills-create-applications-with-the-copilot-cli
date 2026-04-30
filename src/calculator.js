/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      – sum two numbers (a + b)
 *   subtract – find the difference between two numbers (a - b)
 *   multiply – compute the product of two numbers (a * b)
 *   divide   – divide two numbers (a / b), with division-by-zero protection
 *   modulo   – remainder of division (a % b), with modulo-by-zero protection
 *   power    – raise a to the power of b (a ** b)
 *   sqrt     – square root of a number, with negative-number protection
 *
 * Usage:
 *   node calculator.js <operation> <a> [b]
 *
 * Examples:
 *   node calculator.js add 5 3       => 8
 *   node calculator.js subtract 9 4  => 5
 *   node calculator.js multiply 3 7  => 21
 *   node calculator.js divide 10 2   => 5
 *   node calculator.js modulo 10 3   => 1
 *   node calculator.js power 2 8     => 256
 *   node calculator.js sqrt 16       => 4
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
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Power (exponentiation): returns a raised to the power of b
function power(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a; throws if a is negative
function sqrt(a) {
  if (a < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(a);
}

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };

// CLI entry point — only runs when executed directly (not when required by tests)
if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;

  if (!operation || rawA === undefined) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <a> [b]');
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = rawB !== undefined ? parseFloat(rawB) : undefined;

  if (isNaN(a)) {
    console.error('Error: Operand a must be a valid number.');
    process.exit(1);
  }

  if (rawB !== undefined && isNaN(b)) {
    console.error('Error: Operand b must be a valid number.');
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
      case 'sqrt':
        result = sqrt(a);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
