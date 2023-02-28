function getResultEquation(first, second, operat) {
  switch (operat) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return Math.floor(first / second);
    default:
      return 0;
  }
}
export default getResultEquation;
