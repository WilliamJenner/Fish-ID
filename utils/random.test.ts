import { getNRandomNumbers } from "./random";

it("getNRandomNumbers returns unique random numbers", () => {
  let actual = getNRandomNumbers(5, 10);

  // because sets are unique, we can check if the returned value was unique
  let expected = new Set(actual);

  // assert
  expect(actual.length).toBe(expected.size);
});
