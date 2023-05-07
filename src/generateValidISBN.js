export const isbnGenerator = (number) => {
  if (number.length < 13) {
    return numbergenerator(number, 0, 0);
  } else if (number.length > 13) {
    const numberAsString = number.toString();

    return numberAsString.slice(0, 13);
  }

  return number;
};

const numbergenerator = (number, _summation, _index) => {
  let modifiedNumber = number.toString();
  let summation = _summation;
  let index = _index;

  if (modifiedNumber.length < 13) {
    while (index < modifiedNumber.length) {
      const term = index % 2 === 0 ? 1 : 3;
      summation += Number(modifiedNumber[index]) * term;
      index++;
    }

    const lastDigit = 10 - (summation % 10);
    modifiedNumber =
      modifiedNumber + (lastDigit === 10 ? 0 : lastDigit).toString();

    return numbergenerator(modifiedNumber, summation, index);
  } else {
    return modifiedNumber;
  }
};
