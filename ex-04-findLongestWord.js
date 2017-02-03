/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var findLongestWord = function(inputStr){
  var wrdAry = inputStr.split(' ')
  console.log(wrdAry)
  var lngstWord = ''
  for(var i = 0; i < wrdAry.length; i = i + 1){
    if (wrdAry[i].length > lngstWord.length) {
      lngstWord = wrdAry[i]
    }
  }
  return lngstWord
}


console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
