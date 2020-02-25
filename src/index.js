module.exports = function toReadable (number) {
  let result = '';
  if (number == 0){
    return "zero";
  }
  switch(Math.floor(number/100)){
    case 1: result += "one hundred";
    break;
    case 2: result += "two hundred";
    break;
    case 3: result += "three hundred";
    break;
    case 4: result += "four hundred";
    break;
    case 5: result += "five hundred";
    break;
    case 6: result += "six hundred";
    break;
    case 7: result += "seven hundred";
    break;
    case 8: result += "eight hundred";
    break;
    case 9: result += "nine hundred";
    break;
  }
  switch (Math.floor((number%100))){
    case 10: result += " ten";
    return result.trim();
    break;
    case 11: result += " eleven";
    return result.trim();
    break;
    case 12: result += " twelve";
    return result.trim();
    break;
    case 13: result += " thirteen";
    return result.trim();
    break;
    case 14: result += " fourteen";
    return result.trim();
    break;
    case 15: result += " fifteen";
    return result.trim();
    break;
    case 16: result += " sixteen";
    return result.trim();
    break;
    case 17: result += " seventeen";
    return result.trim();
    break;
    case 18: result += " eighteen";
    return result.trim();
    break;
    case 19: result += " nineteen";
    return result.trim();
    break;
  }
  switch (Math.floor((number%100)/10)){
    case 2: result += " twenty";
    break;
    case 3: result += " thirty";
    break;
    case 4: result += " forty";
    break;
    case 5: result += " fifty";
    break;
    case 6: result += " sixty";
    break;
    case 7: result += " seventy";
    break;
    case 8: result += " eighty";
    break;
    case 9: result += " ninety";
    break;
  }
  switch ((number%100)%10){
    case 1: result += " one";
    break;
    case 2: result += " two";
    break;
    case 3: result += " three";
    break;
    case 4: result += " four";
    break;
    case 5: result += " five";
    break;
    case 6: result += " six";
    break;
    case 7: result += " seven";
    break;
    case 8: result += " eight";
    break;
    case 9: result += " nine";
    break;
  }
  return result.trim();
}
