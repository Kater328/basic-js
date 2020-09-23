const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = new Object();
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.floor( 60 * 60 * result.turns / turnsSpeed );
  return result;
};
