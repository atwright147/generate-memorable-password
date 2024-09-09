import adjectives from './lib/adjectives';
import nouns from './lib/nouns';

import adjectives2 from './dicts/adjectives.json';
import adverbs from './dicts/adverbs.json';
import animals from './dicts/animals.json';
import cars from './dicts/cars.json';
import cities from './dicts/cities.json';
import common from './dicts/common.json';
import countries from './dicts/countries.json';
import dinosaurs from './dicts/dinosaurs.json';
import emoji from './dicts/emoji.json';
import encouraging from './dicts/encouraging.json';
import ergative from './dicts/ergative.json';
import fruits from './dicts/fruits.json';
import gemstones from './dicts/gemstones.json';
import hazards from './dicts/hazards.json';
import instruments from './dicts/instruments.json';
import lovecraft from './dicts/lovecraft.json';
import metals from './dicts/metals.json';
import music from './dicts/music.json';
import nouns2 from './dicts/nouns.json';
import prepositions from './dicts/prepositions.json';
import shakespeare from './dicts/shakespeare.json';
import sports from './dicts/sports.json';
import strange from './dicts/strange.json';
import vegetables from './dicts/vegetables.json';
import winds from './dicts/winds.json';

import { random, randomInt } from './random';

const numAdjectives = adjectives.length;
const numNouns = nouns.length;

export const generate = (min = 8, max = 16): string => {
  const adjLength1 = randomInt(3, max - 2);
  const adjective1 = adjectives.filter((a) => a.length <= adjLength1)[randomInt(0, numAdjectives - 1)];

  console.info({ adjective1, adjLength1, length: adjective1?.length });

  const adjLength2 = randomInt(3, adjLength1 - 2);
  const adjective2 = adjectives.filter((a) => a.length <= adjLength2)[randomInt(0, numAdjectives - 1)];

  const nounLength = randomInt(3, adjLength1 + adjLength2 - 2);
  const noun1 = nouns.filter((n) => n.length === nounLength)[randomInt(0, numAdjectives - 1)];

  const password = [adjective1, adjective2, noun1, random(1, 9)].join('-').replace(/ /g, '-');

  return password;
};
