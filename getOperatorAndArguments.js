import getArgumenst from './getArguments.js';

function getOperatorAndArguments(str, numberSystem) {
  const attributes = str.trim().split(' ');
  const operators = ['+', '-', '*', '/'];
  if (attributes.length < 3) {
    throw new Error('Строка не является математической операцией');
  }
  if (attributes.length > 3) {
    throw new Error(
      'Формат математической операции не удовлетворяет заданию - два операнда и один оператор (+, -, /, *)',
    );
  }
  const [firstArg, operator, secondAgr] = attributes;
  if (!operators.includes(operator)) {
    throw new Error('Строка не является математической операцией');
  }
  const args = getArgumenst(firstArg, secondAgr, numberSystem);
  return [...args, operator];
}
export default getOperatorAndArguments;
