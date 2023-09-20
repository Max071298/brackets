module.exports = function check(str, bracketsConfig) {
  let config = {};
  let OPEN_BRACKETS = [];
  let CLOSE_BRACKETS = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    config[bracketsConfig[i][1]] = bracketsConfig[i][0];
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    CLOSE_BRACKETS.push(bracketsConfig[i][1]);
  }

  let resultArray = [];

  for (let i = 0; i < str.length; i++) {
    if (
      OPEN_BRACKETS.findIndex((item) => item === str[i]) !== -1 &&
      CLOSE_BRACKETS.findIndex((item) => item === str[i]) !== -1
    ) {
      if (resultArray.at(-1) === str[i]) {
        resultArray.pop();
      } else resultArray.push(str[i]);
    } else if (OPEN_BRACKETS.findIndex((item) => item === str[i]) !== -1) {
      resultArray.push(str[i]);
    } else if (resultArray.at(-1) === config[str[i]]) {
      resultArray.pop();
    } else return false;
  }

  return resultArray.length === 0;
};
