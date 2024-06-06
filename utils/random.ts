export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

/**
 * Returns an array of unique random numbers between 0 and the max
 * @param n the size of the array of numbers to return
 * @param max the end bound
 * @returns
 */
export function getNRandomNumbers(n: number, max: number): Array<number> {
  // guards
  if (max < n) {
    throw new Error(
      `Cannot return ${n} unique random numbers between 0 and ${max}`
    );
  }

  if (max == n) {
    // when max is the same as the amount of unique numbers to return, return an array of all the numbers
    return Array.from(Array(n).keys());
  }

  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < n) {
    uniqueNumbers.add(getRandomInt(max));
  }

  return Array.from(uniqueNumbers);
}
