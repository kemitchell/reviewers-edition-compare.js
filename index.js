module.exports = reviewersEditionCompare

var parse = require('reviewers-edition-parse')
var numbers = require('reviewers-edition-parse/numbers')

function reviewersEditionCompare (a, b) {
  var aParsed = parse(a)
  var bParsed = parse(b)
  var length = numbers.length
  for (var index = 0; index < length; index++) {
    var number = numbers[index]
    var placeholder = number === 'draft' ? Infinity : 0
    var aNumber = aParsed[number] || placeholder
    var bNumber = bParsed[number] || placeholder
    if (aNumber > bNumber) {
      return 1
    } else if (aNumber < bNumber) {
      return -1
    } else {
      continue
    }
  }
  return 0
}
