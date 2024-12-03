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
// Make variables for the type of map, using record here will give number and amount of said number
var frequencyMap = {};
var simularity = 0;
for (var _i = 0, rightArray_1 = rightArray; _i < rightArray_1.length; _i++) {
    var num = rightArray_1[_i];
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
}
for (var _a = 0, leftArray_1 = leftArray; _a < leftArray_1.length; _a++) {
    var num = leftArray_1[_a];
    var frequency = frequencyMap[num] || 0;
    simularity += num * frequency;
}
console.log('Simularity: ', simularity);
//example output: 31
//data output: 
