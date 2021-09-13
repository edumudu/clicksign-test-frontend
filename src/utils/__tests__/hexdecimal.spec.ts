import { strToHex, strToHexColor } from '../hexdecimal';

describe('strToHex', () => {
  it.each([
    ['', ''],
    ['0', '30'],
    ['1', '31'],
    ['hello', '68656c6c6f'],
    ['hello world', '68656c6c6f20776f726c64'],
    ['dummy', '64756d6d79'],
    ['string', '737472696e67'],
  ])('should convert string "%s" to hex string "%s"', (str, hex) => {
    expect(strToHex(str)).toBe(hex);
  });
});

describe('strToHexColor', () => {
  it.each([
    ['hello', '#68656c'],
    ['hello world', '#68656c'],
    ['dummy', '#64756d'],
    ['string', '#737472'],
  ])('should convert string "%s" to hex color "%s"', (str, color) => {
    expect(strToHexColor(str)).toBe(color);
  });
});
