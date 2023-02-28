import getResultEquation from './getResultEquation.js';
import getOperatorAndArguments from './getOperatorAndArguments.js';
import objNumSystems from './numberSystems/numberSystems.js';

function calculator(str, numberSystem = 'arabic') {
  const [firstArg, secondAgr, operator] = getOperatorAndArguments(str, numberSystem);
  if (firstArg < 1
    || firstArg > 10
    || secondAgr < 1
    || secondAgr > 10) {
    throw new Error('Используйте число от 1 до 10');
  }
  const result = getResultEquation(firstArg, secondAgr, operator);
  if (numberSystem === 'arabic') {
    return result.toString();
  }
  if (result < 1) {
    return '';
  }
  const system = objNumSystems.find((oneSystem) => oneSystem.name === numberSystem).reveresed;
  return system[result];
}

export default calculator;
