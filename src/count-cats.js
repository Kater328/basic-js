const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for (let i = 0; i < cats.length; i++) {
    let row_sizes = [];
    row_sizes.push(cats[i].length);
    for (let k = 0; k < Math.min.apply(null, row_sizes); k++){
      if (cats[i][k] === '^^') count += 1;
    }
  }
  return count;
};
