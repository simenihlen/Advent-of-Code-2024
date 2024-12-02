"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = './data.txt';
var content = fs.readFileSync(data, 'utf-8');
var leftArray = [];
var rightArray = [];
content.split('\n').forEach(function (line) {
    // /\s+/ regex for spaces, so here it will split the array at the space between
    var _a = line.split(/\s+/).map(Number), left = _a[0], right = _a[1];
    // isNaN() = checks if value is NaN
    if (!isNaN(left) && !isNaN(right)) {
        leftArray.push(left);
        rightArray.push(right);
    }
});
// have to use (a,b) => a - b because js is weird and doesn't like using sort() on numbers. 
// sort() by itself works great when sorting an array alphabetically
leftArray.sort(function (a, b) { return a - b; });
rightArray.sort(function (a, b) { return a - b; });
// reduce iterates through every element of the array it is called on
// reduce(accumulator, currentValue, index, array), accumulator = sum, currentValue = leftNum, index = i, array = 0
// sum = variable where we put the sum of the two numbers, the starting value is 0
// leftNum = current value of the element of the indexed array of leftArray
// i = the current index we have iterated
// 0 = the starting value of the index
var totalDistance = leftArray.reduce(function (sum, leftNum, i) {
    return sum + Math.abs(leftNum - rightArray[i]);
}, 0);
console.log('Total distance: ', totalDistance);
//example output: 11
