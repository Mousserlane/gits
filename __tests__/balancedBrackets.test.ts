import { isBracketBalanced } from '../balancedBrackets'
describe("Balanced Brackets", () => {
  test("Given input of {[()]}, it should return 'YES' ", () => {
    const input = '{[()]}';
    const isBalanced = isBracketBalanced(input);
    expect(isBalanced).toEqual("YES");
  });
  test("Given input of {[(])}, it should return 'NO' ", () => {
    const input = '{[(])}';
    const isBalanced = isBracketBalanced(input);
    expect(isBalanced).toEqual("NO");
  })
  test("Given input of {(([])[])[]}, it should return 'YES'", () => {
    const input = '{(([])[])[]}';
    const isBalanced = isBracketBalanced(input);
    expect(isBalanced).toEqual("YES");
  })
})