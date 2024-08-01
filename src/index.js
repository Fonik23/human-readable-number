module.exports = function toReadable (number) {
  const under20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number < 0) return number;
  if (number <= 19) {
    return under20[number];
  }
  if (number >= 20) {
  const getArray = number.toString().split('');
    if (number % 10 === 0 && number < 100) {
      return dozens[getArray[0] - 1];
    }
    if (number % 100 === 0 && number >= 100) {
      return `${under20[getArray[0]]} hundred`;
    }
    if (getArray.length === 2 && number % 10 !== 0) {
      return `${dozens[getArray[0] -1]} ${under20[getArray[1]]}`;
    }
    if (getArray[1] === '0' && number % 100 !== 0) {
      return `${under20[getArray[0]]} hundred ${under20[getArray[2]]}`;
    }
    if(getArray[1] === '1' && getArray[2] >= '1') {
      return `${under20[getArray[0]]} hundred ${under20[Number(getArray[1] + getArray[2])]}`;
    }
    if(getArray[2] === '0') {
      return `${under20[getArray[0]]} hundred ${dozens[getArray[1] -1]}`;
    }
    if (getArray.length === 3 && number % 100 !== 0) {
      return `${under20[getArray[0]]} hundred ${dozens[getArray[1] -1]} ${under20[getArray[2]]}`;
    }
  }
}
