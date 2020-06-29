'use strict'

const anArray = [1, 2, 3, 4]

// The old way.
if (anArray.indexOf(3) !== -1) {
  console.log('Found the value in the array.')
}

// The new `Array.prototype.includes()` way. It checks the array for the passed in argument and returns `true` if the
// array contains the value; or `false` otherwise.
if (anArray.includes(3)) {
  console.log('Found the value in the array.')
}

// `Array.prototype.includes()` works on a string too.
const aString = 'Is TypeScript good?'
console.log(aString.includes('typescript')) // false.
console.log(aString.toLocaleLowerCase().includes('typescript')) // true.

// `Array.prototype.includes()` strictly checks on `NaN` and `undefined` too.
const arrayWithNaN = [1, NaN, 2, 3]
console.log(arrayWithNaN.includes(NaN)) // true.
console.log(arrayWithNaN.includes(undefined)) // false.
const arrayWithUndefined = [1, 2, undefined, 4]
console.log(arrayWithUndefined.includes(NaN)) // false.
console.log(arrayWithUndefined.includes(undefined)) // true.

// `Array.prototype.includes()` has an optional second parameter - `fromIndex`. It specifies the starting position for
// the lookup.
const arrayForIncludesFromIndexTest = [1, 2, 3, 4]
console.log(arrayForIncludesFromIndexTest.includes(1)) // `true`. Equivalent to `arrayForIncludesFromIndexTest.includes(1, 0)`.
console.log(arrayForIncludesFromIndexTest.includes(1, 1)) // `false`. Lookup starts at the second array element.
