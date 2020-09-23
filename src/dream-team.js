const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(members) === false) return false;
  let m = [];
for (let i = 0; i < members.length; i++) {
  if (typeof(members[i]) != 'string') continue;
  let start = 0;
  if(members[i].substring(start, start + 1) === ' ') { do start += 1;
    while (members[i].substring(start,start + 1) === ' ');
  }
  m.push(members[i].substring(start, start + 1).toUpperCase());
}
return m.sort().join('');
};
