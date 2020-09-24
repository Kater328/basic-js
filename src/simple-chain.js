const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.result.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.result.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof position === 'number' && position <= this.getLength() && position > 0 )
      this.result.splice(position - 1, 1);
    else {
      this.result = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.result.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let ready = this.result;
    this.result = [];
    return ready.join('~~');
  }
};
module.exports = chainMaker;
