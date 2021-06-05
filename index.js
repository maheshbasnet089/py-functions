//Shuffles the Array


function shuffle(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }


  //Generates Random Integer

function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Like of Python range function it generates Number from provided argument 

  function range(start, end, step) {
  var _end = end || start;
  var _start = end ? start : 0;
  var _step = step || 1;
  return Array((_end - _start) / _step).fill(0).map((v, i) => _start + (i * _step));
}


function counter(array) {
  var count = {};
  array.forEach(val => count[val] = (count[val] || 0) + 1);
  return count;
}

//reverses a string 
function reversestring(str) {
  return str.split("").reverse().join("");
}
module.exports = {
  shuffle,
  randint,
  range,
  counter,
  reversestring
};