/**
 * Unit tests for calculator.js
 *
 * Covers all four supported operations:
 *   - add      (addition)
 *   - subtract (subtraction)
 *   - multiply (multiplication)
 *   - divide   (division)
 *
 * Includes base examples from the image, additional cases, and edge cases.
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
