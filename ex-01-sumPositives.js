
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/

var sumPositives = function(numArray){

  var posNmbr = 0
  for (var i = 0; i < numArray.length ; i = i + 1){
    var arrNmbr = numArray[i];
    if ((arrNmbr > 0) === true){

      posNmbr = posNmbr + arrNmbr
    }

  }
  return posNmbr
}


console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
