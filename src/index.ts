export function duplicateEncode(word: string) {
  const frequency = new Map<string, number>();

  for (const char of word) {
    const lowercaseChar = char.toLowerCase();

    if (frequency.has(lowercaseChar)) {
      frequency.set(lowercaseChar, frequency.get(lowercaseChar)! + 1);
    } else {
      frequency.set(lowercaseChar, 1);
    }
  }

  let result = "";

  for (const char of word) {
    // Convert the character to lowercase for case-insensitive matching
    const lowercaseChar = char.toLowerCase();

    // If the character has a frequency of 1 in the map, add a "(" to the result string
    if (frequency.get(lowercaseChar) === 1) {
      result += "(";
    } else {
      // Otherwise, add a ")" to the result string
      result += ")";
    }
  }

  return result;
}
