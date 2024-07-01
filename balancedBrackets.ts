
export function isBracketBalanced(bracketSet: string): "YES" | "NO" {
  const bracketMap: Record<string, string> = {
    '}': '{',
    ')': '(',
    ']': '['
  }

  const stack = [];

  for (const bracket of bracketSet) {
    if (!(bracketMap.hasOwnProperty(bracket))) {
      stack.push(bracket);
    } else {
      if (stack[stack.length - 1] !== bracketMap[bracket]) {
        return "NO"
      }
      stack.pop()
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}