function multiply(number) {
  let numLength;
  // if the number is negative, we need to account for the negative sign
  // so we subtract 1 from the length of the number
  if (number < 0) {
    numLength = number.toString().length - 1;
  } else {
    numLength = number.toString().length;
  }
  // multiply the number by 5 to the power of the length of the number
  let newNum = number * 5 ** numLength;
  return newNum;
}
