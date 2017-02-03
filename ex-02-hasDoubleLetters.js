
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/

var hasDoubleLetters = function(inputStr){
  isTrue = false
  for (var i = 0; i < inputStr.length ; i = i + 1){

    if ( inputStr[i + 1] === inputStr[i].toLowerCase()) {
      if (inputStr[i + 1] === 'undefined'){
      }else {
        isTrue = true
      }
      return true
    }

  }
 return false
}


console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
