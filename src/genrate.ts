import adjectives from './lib/adjectives';
import nouns from './lib/nouns';
import { random } from './random';

const numAdjectives = adjectives.length;
const numNouns = nouns.length;

export const generate = (): string => {
  const adjective1 = adjectives[random(0, numAdjectives - 1)];
  const adjective2 = adjectives[random(0, numAdjectives - 1)];
  const noun1 = nouns[random(0, numNouns - 1)];

  return [adjective1, adjective2, noun1, random(1000, 9999)].join('-').replace(/ /g, '-');
};
