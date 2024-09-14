import { dicts } from './dicts';
import { random, randomInt } from './random';

// const wordLengths = Array.from(new Set(dicts.map((word) => word.length))).sort((a, b) =>
//   String(a).localeCompare(String(b), undefined, { numeric: true, ignorePunctuation: true }),
// );

export const generate = (min = 8, max = 16): string => {
  console.info({ min, max });

  const word1Length = randomInt(3, Math.floor(max / 3));
  const word1Filtered = dicts.filter((word) => word.length === word1Length);
  const word1 = word1Filtered[randomInt(0, word1Filtered.length - 1)];

  const word2Length = randomInt(3, word1?.length - 2);
  const word2Filtered = dicts.filter((word) => word.length === word2Length);
  const word2 = word2Filtered[randomInt(0, word2Filtered.length - 1)];

  const word3Length = randomInt(3, word1?.length + word2.length - 2);
  const word3Filtered = dicts.filter((word) => word.length === word3Length);
  const word3 = word3Filtered[randomInt(0, word3Filtered.length - 1)];

  const password = [word1, word2, word3, random(1, 9)].join('-').replace(/ /g, '-');

  return password;
};
