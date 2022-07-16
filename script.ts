import Singleton from './classes/singleton.class.js';
import { Fruits } from './data/data.constant.js';

const fruitsManager1 = new Singleton([Fruits.Apple, Fruits.Orange]);
const fruitsManager2 = new Singleton([Fruits.Banana]);

setTimeout(() => {
  console.clear();
  console.log(
    '// --- After creation two Fruint Managers using "new" construction there is only One instance of class'
  );
  console.log('🙎‍♀‍ FruitsManager #1:', fruitsManager1.getFruits());
  console.log('🧑‍🌾 FruitsManager #2:', fruitsManager2.getFruits());
}, 200);

setTimeout(() => {
  console.log('// --- 🙎‍♀‍ FruitsManager #1 ADD "Pear"');
  fruitsManager1.setFruit(Fruits.Pear);
  console.log('🙎‍♀‍ FruitsManager #1:', fruitsManager1.getFruits());
}, 1500);

setTimeout(() => {
  console.log('// --- 🧑‍🌾 FruitsManager #2 ADD "Watermelon", "Strawberries"');

  fruitsManager2.setFruit(Fruits.Watermelon);
  fruitsManager2.setFruit(Fruits.Strawberries);
  console.log('🧑‍🌾 FruitsManager #2:', fruitsManager2.getFruits());
}, 3000);

setTimeout(() => {
  console.log('// --- 🙎‍♀‍ FruitsManager #1 REMOVE "Apple", "Orange"');
  console.log('// --- Each Managers 🙎‍♀‍ 🧑‍🌾 has the same list of fruits');
  fruitsManager1.removeFruit(Fruits.Apple);
  fruitsManager1.removeFruit(Fruits.Orange);

  console.log('🙎‍♀‍ FruitsManager #1:', fruitsManager1.getFruits());
  console.log('🧑‍🌾 FruitsManager #2:', fruitsManager2.getFruits());
}, 4500);
