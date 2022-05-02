import { integerToWords } from "./numbers";
import { VALUE_MIN, VALUE_MAX } from "../App.consts";

describe("integerToWords function", () => {
  it("displays nothing if value is not a number", () => {
    // @ts-ignore: Parameter type
    const test = integerToWords("xyz");
    expect(test).toBe("");
  });
  it("correctly transforms number 1", () => {
    const test = integerToWords(1);
    expect(test).toBe("one");
  });
  it("correctly transforms number 722", () => {
    const test = integerToWords(722);
    expect(test).toBe("seven hundred and twenty-two");
  });
  it("correctly transforms number 12345", () => {
    const test = integerToWords(72345);
    expect(test).toBe("seventy-two thousand three hundred and forty-five");
  });
  it("displays message if number is too small", () => {
    const test = integerToWords(VALUE_MIN - 1);
    expect(test).toBe(`Number must be between ${VALUE_MIN} and ${VALUE_MAX}`);
  });
  it("displays message if number is too large", () => {
    const test = integerToWords(VALUE_MAX + 1);
    expect(test).toBe(`Number must be between ${VALUE_MIN} and ${VALUE_MAX}`);
  });
  it("correctly transforms number -1", () => {
    const test = integerToWords(-1);
    if (VALUE_MIN < -1) {
      expect(test).toBe("Number must be positive");
    }
  });
  it("correctly transforms number 1000000", () => {
    const test = integerToWords(1000000);
    if (VALUE_MAX > 1000000) {
      expect(test).toBe("at least a million");
    }
  });
});
