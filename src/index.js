module.exports = function check(str, bracketsConfig) {
  console.log(str.split(''));

  let openBrackets = [];
  let closedBrackets = {}

  bracketsConfig.forEach(element => {
      openBrackets.push(element[0]);
      closedBrackets[element[1]] = element[0];
  })

  let stack = [];
  str.split('').forEach((element, index) => {
    stack.push(element);
    if (stack[stack.length-2] !== undefined) {
      if (closedBrackets[stack[stack.length-1]] === stack[stack.length-2]) {
        stack.pop();
        stack.pop();
      }
    }
  })
  if (stack.length === 0) {
      return true
  } else {
      return false
  }
}