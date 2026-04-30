/**
 * Unit tests for the Node.js CLI Calculator App
 * Tests all calculator operations including edge cases
 */

const assert = require('assert');
const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✓ ${description}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${description}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

// --- addition tests ---
console.log('\naddition');
test('adds two positive numbers', () => {
  assert.strictEqual(addition(2, 3), 5);
});
test('adds a positive and a negative number', () => {
  assert.strictEqual(addition(10, -4), 6);
});
test('adds two negative numbers', () => {
  assert.strictEqual(addition(-3, -7), -10);
});
test('adds zero to a number', () => {
  assert.strictEqual(addition(5, 0), 5);
});

// --- subtraction tests ---
console.log('\nsubtraction');
test('subtracts two positive numbers', () => {
  assert.strictEqual(subtraction(10, 4), 6);
});
test('subtracts resulting in a negative number', () => {
  assert.strictEqual(subtraction(3, 8), -5);
});
test('subtracts zero from a number', () => {
  assert.strictEqual(subtraction(7, 0), 7);
});

// --- multiplication tests ---
console.log('\nmultiplication');
test('multiplies two positive numbers', () => {
  assert.strictEqual(multiplication(3, 4), 12);
});
test('multiplies by zero', () => {
  assert.strictEqual(multiplication(5, 0), 0);
});
test('multiplies a positive and a negative number', () => {
  assert.strictEqual(multiplication(-3, 4), -12);
});
test('multiplies two negative numbers', () => {
  assert.strictEqual(multiplication(-3, -4), 12);
});

// --- division tests ---
console.log('\ndivision');
test('divides two positive numbers', () => {
  assert.strictEqual(division(10, 2), 5);
});
test('divides resulting in a decimal', () => {
  assert.strictEqual(division(7, 2), 3.5);
});
test('throws on division by zero', () => {
  assert.throws(() => division(5, 0), /Division by zero/);
});

// --- modulo tests ---
console.log('\nmodulo');
test('returns the remainder of two positive numbers', () => {
  assert.strictEqual(modulo(10, 3), 1);
});
test('returns zero when evenly divisible', () => {
  assert.strictEqual(modulo(9, 3), 0);
});
test('throws on modulo by zero', () => {
  assert.throws(() => modulo(5, 0), /Modulo by zero/);
});

// --- power tests ---
console.log('\npower');
test('raises a number to a positive exponent', () => {
  assert.strictEqual(power(2, 10), 1024);
});
test('raises a number to the power of zero', () => {
  assert.strictEqual(power(5, 0), 1);
});
test('raises a number to a negative exponent', () => {
  assert.strictEqual(power(2, -1), 0.5);
});

// --- squareRoot (square root) tests ---
console.log('\nsquare root');
test('calculates the square root of a perfect square', () => {
  assert.strictEqual(squareRoot(9), 3);
});
test('calculates the square root of a non-perfect square', () => {
  assert.ok(Math.abs(squareRoot(2) - Math.SQRT2) < 1e-10);
});
test('returns zero for squareRoot(0)', () => {
  assert.strictEqual(squareRoot(0), 0);
});
test('throws on square root of a negative number', () => {
  assert.throws(() => squareRoot(-4), /negative/);
});

// --- summary ---
console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed\n`);
if (failed > 0) {
  process.exit(1);
}
