"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var example = './example.txt';
var content = fs.readFileSync(example, 'utf-8');
var leftArray = [];
var rightArray = [];
content.split('\n').forEach(function (line) {
    // /\s+/ regex for spaces, so here it will split the array at the space between
    var _a = line.split(/\s+/).map(Number), left = _a[0], right = _a[1];
    //isNaN() = checks if value is NaN
    if (!isNaN(left) && !isNaN(right)) {
        leftArray.push(left);
        rightArray.push(right);
    }
});
//have to use (a,b) => a - b because js is weird and doesn't like using sort() on numbers. 
// sort() by itself works great when sorting an array alphabetically
leftArray.sort(function (a, b) { return a - b; });
rightArray.sort(function (a, b) { return a - b; });
// reduce(func, initial value before adding up)
var totalDistance = leftArray.reduce(function (sum, leftNum, i) {
    return sum + Math.abs(leftNum - rightArray[i]);
}, 0);
console.log('Total distance: ', totalDistance);
//example output: 11
