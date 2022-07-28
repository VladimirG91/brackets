module.exports = function check(str, bracketsConfig) {
  const obj = {}
  bracketsConfig.forEach((pair) => (obj[pair[1]] = pair[0]))
  let values = Object.values(obj)
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let currentElement = str[i]
    if (values.includes(currentElement)) {
      stack.push(currentElement)
    } else {
      if (stack.length === 0) {
        return false
      }
      let topElement = stack[stack.length - 1]
      if (obj[currentElement] === topElement) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
