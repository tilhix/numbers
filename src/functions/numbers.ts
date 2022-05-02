import { VALUE_MIN, VALUE_MAX } from "../App.consts";

const NUMBERS: Record<number, string> = {
  1000000: "million",
  1000: "thousand",
  100: "hundred",
  90: "ninety",
  80: "eighty",
  70: "seventy",
  60: "sixty",
  50: "fifty",
  40: "forty",
  30: "thirty",
  20: "twenty",
  19: "nineteen",
  18: "eighteen",
  17: "seventeen",
  16: "sixteen",
  15: "fifteen",
  14: "fourteen",
  13: "thirteen",
  12: "twelve",
  11: "eleven",
  10: "ten",
  9: "nine",
  8: "eight",
  7: "seven",
  6: "six",
  5: "five",
  4: "four",
  3: "three",
  2: "two",
  1: "one",
  0: "zero",
};

export function integerToWords(integer: number): string {
  if (isNaN(integer)) return "";
  if (integer > VALUE_MAX || integer < VALUE_MIN)
    return `Number must be between ${VALUE_MIN} and ${VALUE_MAX}`;

  if (integer < 0) return "Number must be positive";
  if (integer <= 20) return NUMBERS[integer];
  if (integer <= 99) {
    const tensString = NUMBERS[Math.floor(integer / 10) * 10];
    const digitString = integer % 10 ? NUMBERS[integer % 10] : "";
    return digitString ? `${tensString}-${digitString}` : tensString;
  }
  if (integer <= 999) {
    const hundreds = Math.floor(integer / 100);
    const hundredsString = `${NUMBERS[hundreds]} ${NUMBERS[100]}`;
    const tens = integer % 100;
    const tensString = tens ? ` and ${integerToWords(tens)}` : "";
    return hundredsString + tensString;
  }
  if (integer <= 999999) {
    const thousands = Math.floor(integer / 1000);
    const thousandsString = `${integerToWords(thousands)} ${NUMBERS[1000]}`;
    const hundreds = integer % 1000;
    const hundredsString = hundreds ? ` ${integerToWords(hundreds)}` : "";
    return thousandsString + hundredsString;
  }

  return `at least a ${NUMBERS[1000000]}`;
}
