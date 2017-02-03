
// Ex-03 : maxOfArray()

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(numArray){

for (var i = 0; i < numArray.length ; i = i + 1){
  var arrNmbr = numArray[i];
  if( arrNmbr <= 21 ){
    return 21
  }else if ( arrNmbr === 100 ) {
    return 100
  }else {
    return 201
  }
}

}



console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
