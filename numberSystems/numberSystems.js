import binaryNumbers from './binaryNumbers.js';
import getReverseObj from '../getReverseObj.js';
import hexadecimalNumbers from './hexadecimalNumbers.js';
import romeNumbers from './romeNumbers.js';

const numSystems = [
  romeNumbers,
  binaryNumbers,
  hexadecimalNumbers,
];

const objNumSystems = numSystems.map((item) => (
  {
    name: item.numSystem,
    straight: item,
    reveresed: getReverseObj(item),
  }
));
export default objNumSystems;
