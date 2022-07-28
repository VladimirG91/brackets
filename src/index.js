module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.flat(1).join('').match(/.{2}/g)
  for (let i = 0; i < str.length + 40; i++) {
    ;(str = str.replace(arr[0], '')) &&
      (str = str.replace(arr[1], '')) &&
      (str = str.replace(arr[2], '')) &&
      (str = str.replace(arr[3], '')) &&
      (str = str.replace(arr[4], ''))
  }
  return str.length === 0
}
