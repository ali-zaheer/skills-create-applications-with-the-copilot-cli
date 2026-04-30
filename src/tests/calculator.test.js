/**
 * Unit tests for calculator.js
 *
 * Covers all supported operations:
 *   - add        (addition)
 *   - subtract   (subtraction)
 *   - multiply   (multiplication)
 *   - divide     (division)
 *   - modulo     (remainder)
 *   - power      (exponentiation)
 *   - squareRoot (square root)
 *
 * Includes base examples from the image, additional cases, and edge cases.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // Image example: 2 + 3 = 5
  test('2 + 3 equals 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds a positive and a negative number', () => expect(add(5, -3)).toBe(2));
  test('adds two negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds zero to a number', () => expect(add(7, 0)).toBe(7));
  test('adds two zeros', () => expect(add(0, 0)).toBe(0));
  test('adds decimal numbers', () => expect(add(1.1, 2.2)).toBeCloseTo(3.3));
});

// --- Subtraction ---
describe('subtract', () => {
  // Image example: 10 - 4 = 6
  test('10 - 4 equals 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('subtracts a larger number from a smaller (negative result)', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number', () => expect(subtract(5, -3)).toBe(8));
  test('subtracts zero from a number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts a number from itself', () => expect(subtract(7, 7)).toBe(0));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
});

// --- Multiplication ---
describe('multiply', () => {
  // Image example: 45 * 2 = 90
  test('45 * 2 equals 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies a positive and a negative number', () => expect(multiply(4, -3)).toBe(-12));
  test('multiplies two negative numbers', () => expect(multiply(-3, -5)).toBe(15));
  test('multiplies by zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies by one (identity)', () => expect(multiply(13, 1)).toBe(13));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10));
});

// --- Division ---
describe('divide', () => {
  // Image example: 20 / 5 = 4
  test('20 / 5 equals 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive numbers', () => expect(divide(15, 3)).toBe(5));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides a negative number', () => expect(divide(-12, 4)).toBe(-3));
  test('divides two negative numbers (positive result)', () => expect(divide(-10, -2)).toBe(5));
  test('divides zero by a number', () => expect(divide(0, 5)).toBe(0));
  test('divides by one (identity)', () => expect(divide(8, 1)).toBe(8));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// --- Modulo ---
describe('modulo', () => {
  // Image example: 5 % 2 = 1
  test('5 % 2 equals 1', () => expect(modulo(5, 2)).toBe(1));

  test('10 % 3 equals 1', () => expect(modulo(10, 3)).toBe(1));
  test('returns 0 when evenly divisible', () => expect(modulo(9, 3)).toBe(0));
  test('works with negative dividend', () => expect(modulo(-10, 3)).toBe(-1));
  test('works with negative divisor', () => expect(modulo(10, -3)).toBe(1));
  test('throws when divisor is zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });
});

// --- Power ---
describe('power', () => {
  // Image example: 2 ^ 3 = 8
  test('2 ^ 3 equals 8', () => expect(power(2, 3)).toBe(8));

  test('2 ^ 8 equals 256', () => expect(power(2, 8)).toBe(256));
  test('any number to the power of 0 is 1', () => expect(power(5, 0)).toBe(1));
  test('any number to the power of 1 is itself', () => expect(power(7, 1)).toBe(7));
  test('handles negative exponent (reciprocal)', () => expect(power(2, -1)).toBeCloseTo(0.5));
  test('handles fractional exponent (square root)', () => expect(power(9, 0.5)).toBeCloseTo(3));
  test('0 to any positive power is 0', () => expect(power(0, 5)).toBe(0));
});

// --- Square Root ---
describe('squareRoot', () => {
  // Image example: √16 = 4
  test('√16 equals 4', () => expect(squareRoot(16)).toBe(4));
  test('square root of 0 is 0', () => expect(squareRoot(0)).toBe(0));
  test('square root of 2 is approximately 1.414', () => expect(squareRoot(2)).toBeCloseTo(1.414));
  test('square root of 1 is 1', () => expect(squareRoot(1)).toBe(1));
  test('throws for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });
  test('throws for any negative number', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });
});
