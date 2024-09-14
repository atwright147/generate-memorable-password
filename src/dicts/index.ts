import adjectives from './lib/adjectives';
import nouns from './lib/nouns';

import adjectives2 from './adjectives.json';
import adverbs from './adverbs.json';
import animals from './animals.json';
import cars from './cars.json';
import cities from './cities.json';
import common from './common.json';
import countries from './countries.json';
import dinosaurs from './dinosaurs.json';
import emoji from './emoji.json';
import encouraging from './encouraging.json';
import ergative from './ergative.json';
import fruits from './fruits.json';
import gemstones from './gemstones.json';
import hazards from './hazards.json';
import instruments from './instruments.json';
import lovecraft from './lovecraft.json';
import metals from './metals.json';
import music from './music.json';
import nouns2 from './nouns.json';
import prepositions from './prepositions.json';
import shakespeare from './shakespeare.json';
import sports from './sports.json';
import strange from './strange.json';
import vegetables from './vegetables.json';
import winds from './winds.json';

const combined = [
  ...adjectives,
  ...nouns,
  ...adverbs.entries,
  ...animals.entries,
  ...cars.entries,
  ...cities.entries,
  ...common.entries,
  ...countries.entries,
  ...dinosaurs.entries,
  ...emoji.entries,
  ...encouraging.entries,
  ...ergative.entries,
  ...fruits.entries,
  ...gemstones.entries,
  ...hazards.entries,
  ...instruments.entries,
  ...lovecraft.entries,
  ...metals.entries,
  ...music.entries,
  ...prepositions.entries,
  ...shakespeare.entries,
  ...sports.entries,
  ...strange.entries,
  ...vegetables.entries,
  ...winds.entries,
  ...adjectives2.entries,
  ...nouns2.entries,
].sort();

const dicts = Object.freeze(Array.from(new Set(combined)));

export { dicts };
