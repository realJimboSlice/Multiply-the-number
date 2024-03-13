function multiply(number) {
  // Number is multiplied by 5 to the power length of the number (using toString method to convert number to string and then getting the length of the string using length property of string object)
  let newNum = number * 5 ** number.toString().length;
  return newNum;
}
