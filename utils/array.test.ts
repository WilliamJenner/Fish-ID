import { getDuplicatedIndexes } from "./array";

it("getDuplicatedIndexes returns indices with duplicates", () => {
  let duplicatedIndices = [1, 2, 3, 4, 5, 5, 6, 7, 5, 9, 10];

  let expected = [4, 5, 8];
  let actual = getDuplicatedIndexes(duplicatedIndices);

  expect(actual).toStrictEqual(expected);
});
