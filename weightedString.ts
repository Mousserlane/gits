export function weightedString(inputString: string, queries: number[]): ('Yes' | 'No')[] {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const weightedAlphabet = new Map<string, number>();

  alphabet.split('').forEach((_alphabet, index) => {
    weightedAlphabet.set(_alphabet, index + 1);
  });

  const sums: number[] = [];
  let previous = "";
  let length = 0;
  for (const char of inputString) {
    if (previous.includes(char)) {
      length++;
      sums.push(weightedAlphabet.get(char)! * length)
    } else {
      previous += char;
      length = 1;
      sums.push(weightedAlphabet.get(char)!);
    }
  }

  return queries.map(query => sums.includes(query) ? "Yes" : "No")
}
