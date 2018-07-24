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
  let sum = 0
  for(let i = 1; i < n; i++) {
    sum += i
  }
  return sum
}

module.exports = { countIdenticalPairs }