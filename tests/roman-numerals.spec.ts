import { toRoman } from '../src/roman-numerals';
import {describe, it, expect } from "vitest";

describe('Roman Numerals basics', () => {
    it('1', () => {
        expect(toRoman(1)).toBe('I');
    })
    it('5', () => {
        expect(toRoman(5)).toBe('V');
    })
    it('10', () => {
        expect(toRoman(10)).toBe('X');
    })
    it('40', () => {
        expect(toRoman(40)).toBe('XL');
    })
    it('50', () => {
        expect(toRoman(50)).toBe('L');
    })
    it('100', () => {
        expect(toRoman(100)).toBe('C');
    })
    it('500', () => {
        expect(toRoman(500)).toBe('D');
    })
    it('1000', () => {
        expect(toRoman(1000)).toBe('M');
    })
});

describe('Roman Numerals additions', () => {
  it('2', () => {
      expect(toRoman(2)).toBe('II');
  })
  it('3', () => {
      expect(toRoman(3)).toBe('III');
  })
  it('6', () => {
      expect(toRoman(6)).toBe('VI');
  })
  it('7', () => {
      expect(toRoman(7)).toBe('VII');
  })
  it('8', () => {
      expect(toRoman(8)).toBe('VIII');
  })
  it('11', () => {
      expect(toRoman(11)).toBe('XI');
  })
  it('15', () => {
      expect(toRoman(15)).toBe('XV');
  })
  it('1513', () => {
      expect(toRoman(1513)).toBe('MDXIII');
  })
});

describe('Roman Numerals substractions', () => {
  it('4', () => {
    expect(toRoman(4)).toBe('IV');
  })
  it('9', () => {
    expect(toRoman(9)).toBe('IX');
  })
  it('14', () => {
    expect(toRoman(14)).toBe('XIV');
  })
  it('90', () => {
    expect(toRoman(90)).toBe('XC');
  })
  it('99', () => {
    expect(toRoman(99)).toBe('XCIX');
  })
  it('999', () => {
    expect(toRoman(999)).toBe('CMXCIX');
  })
  it('4999', () => {
    expect(toRoman(4999)).toBe('MMMMCMXCIX');
  })
});
