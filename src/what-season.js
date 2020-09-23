const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(typeof(date) === 'undefined') return 'Unable to determine the time of year!';
  if (isNaN(date.valueOf() && date instanceof Date)) throw new Error();
  let month = date.getMonth();
  if(month === 0 || month === 1 || month === 11) return 'winter';
  else if(month === 2 || month === 3 || month === 4) return 'spring';
  else if(month === 5 || month === 6 || month === 7) return 'summer';
  else  return 'autumn';
};
