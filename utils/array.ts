export function isArrayUnique(array: Array<unknown>) {
  const set = new Set(array);
  return array.length === set.size;
}

export function getDuplicatedIndexes(array: Array<unknown>): Array<number> {
  const duplicateIndices = new Set<number>();
  const seen = new Map<unknown, number>();

  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      duplicateIndices.add(seen.get(array[i]) as number);
      duplicateIndices.add(i);
    } else {
      seen.set(array[i], i);
    }
  }

  return Array.from(duplicateIndices);
}
