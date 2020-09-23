const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if ( typeof(activity) != String) return false;
  return Math.ceil((Math.log(MODERN_ACTIVITY/activity))/(0.693 / HALF_LIFE_PERIOD));
};
