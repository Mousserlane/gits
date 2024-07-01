import { weightedString } from '../weightedString'

describe("Weighted String", () => {
  test("Given an input of 'abbcccd & [1, 3, 9, 8]', it should return [Yes, Yes, Yes, No]", () => {
    const inputStr = 'abbcccd';
    const queries = [1, 3, 9, 8];

    const result = weightedString(inputStr, queries);
    expect(result).toEqual(["Yes", "Yes", "Yes", "No"])
  })
  test("Given an input of 'bbccc & [4, 9, 5]', it should return [Yes, Yes, No]", () => {
    const inputStr = 'bbccc';
    const queries = [4, 9, 5];

    const result = weightedString(inputStr, queries);
    expect(result).toEqual(["Yes", "Yes", "No"])
  })
})