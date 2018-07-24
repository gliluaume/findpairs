'use strict'
// o(n²)
function countIdenticalPairs(array) {
  const foundAll = {} // integer found in array
  const havePair = []
  array.forEach((item) => {
    if (foundAll[item] && !havePair.includes(item)) {
      havePair.push(item) // detect number that have been found
    }
    foundAll[item] = (foundAll[item] || 0) + 1
  })
  return havePair.reduce((acc, key) =>
    acc + sumN(foundAll[key]), 0)
}


function sumN(n) {
  return n < 2
    ? 0
    : n * (n-1) / 2
}

module.exports = { countIdenticalPairs }
