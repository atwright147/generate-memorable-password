import adjectives from './dicts/lib/adjectives';
import nouns from './dicts/lib/nouns';

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

const combined = [
  adjectives.entries,
  adverbs.entries,
  animals.entries,
  cars.entries,
  cities.entries,
  common.entries,
  countries.entries,
  dinosaurs.entries,
  emoji.entries,
  encouraging.entries,
  ergative.entries,
  fruits.entries,
  gemstones.entries,
  hazards.entries,
  instruments.entries,
  lovecraft.entries,
  metals.entries,
  music.entries,
  nouns.entries,
  prepositions.entries,
  shakespeare.entries,
  sports.entries,
  strange.entries,
  vegetables.entries,
  winds.entries,
  adjectives2,
  nouns2,
];

console.info(combined);
