export function twoSum(array1, array2) {
  const num1 = Number(array1.join(''));
  const num2 = Number(array2.join(''));
  return num1 + num2;
}

export function luckyNumber(value) {
  const strValue = String(value);
  const reversedStr = strValue.split('').reverse().join('');
  return strValue === reversedStr;
}

export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  }
  if (!Number(input)) {
    return 'Must be a number besides 0';
  }
  return '';
}
