import { test, expect } from '@jest/globals';
import calculator from '../calculator.js';

test('arab-calulator', () => {
  expect(calculator('2 + 2', 'arabic')).toEqual('4');
  expect(calculator('5 / 3')).toEqual('1');
  expect(calculator('9 * 8', 'arabic')).toEqual('72');
  expect(calculator('3 - 9')).toEqual('-6');
});

test('rome-calulator', () => {
  expect(calculator('V + X', 'roman')).toEqual('XV');
  expect(calculator('X / III', 'roman')).toEqual('III');
  expect(calculator('VI * VIII', 'roman')).toEqual('XLVIII');
  expect(calculator('X - II', 'roman')).toEqual('VIII');
  expect(calculator('V - X', 'roman')).toEqual('');
});

test('binary-calulator', () => {
  expect(calculator('110 + 110', 'binary')).toEqual('1100');
  expect(calculator('1000 / 11', 'binary')).toEqual('10');
  expect(calculator('111 * 1010', 'binary')).toEqual('1000110');
  expect(calculator('1001 - 101', 'binary')).toEqual('100');
  expect(calculator('100 / 110', 'binary')).toEqual('');
});

test('hexadem-calulator', () => {
  expect(calculator('7 + 8', 'decimal')).toEqual('F');
  expect(calculator('A / 2', 'decimal')).toEqual('5');
  expect(calculator('5 * 6', 'decimal')).toEqual('1E');
  expect(calculator('A - 2', 'decimal')).toEqual('8');
});

test('toThrow', () => {
  expect(() => calculator('11 + 2', 'arabic')).toThrow();
  expect(() => calculator('0 - 6', 'arabic')).toThrow();
  expect(() => calculator('-5 * 6', 'arabic')).toThrow();
  expect(() => calculator('2 / 0', 'arabic')).toThrow();
  expect(() => calculator('II + ', 'roman')).toThrow();
  expect(() => calculator('A - 3', 'deciml')).toThrow();
  expect(() => calculator('A / 0', 'decimal')).toThrow();
  expect(() => calculator('101 * 1001')).toThrow();
  expect(() => calculator('1001 - V', 'roman')).toThrow();
});
