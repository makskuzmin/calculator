import objNumSystems from './numberSystems/numberSystems.js';

function getArguments(firstArg, secondArg, numberSystem) {
  const firstNum = Number(firstArg);
  const secondNum = Number(secondArg);
  if (numberSystem === 'arabic') {
    if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
      throw new Error('Аргументы не соответствуют системе счисления');
    }
    return [firstNum, secondNum];
  }
  const system = objNumSystems.find((oneSystem) => oneSystem.name === numberSystem);
  if (system === undefined) {
    throw new Error('Cистема счисления отсутствует');
  }
  if (
    Object.hasOwn(system.straight, firstArg)
    && Object.hasOwn(system.straight, secondArg)
  ) {
    return [system.straight[firstArg], system.straight[secondArg]];
  }
  throw new Error('Аргументы не соответствуют системе счисления');
}
export default getArguments;
