"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = './data.txt';
var content = fs.readFileSync(data, 'utf-8');
var safeReports = 0;
var reports = content.trim()
    .split('\n')
    .map(function (line) { return line.trim().split(/\s+/).map(Number); }); //same as day1: converts each line to an array of numbers
/* [ outputs this: (((:
  [ 7, 6, 4, 2, 1 ],
  [ 1, 2, 7, 8, 9 ],
  [ 9, 7, 6, 2, 1 ],
  [ 1, 3, 2, 4, 5 ],
  [ 8, 6, 4, 4, 1 ],
  [ 1, 3, 6, 7, 9 ]
]*/
//Make function to be able to check each element in the reports array
function isReportSafe(report) {
    var difference = [];
    for (var i = 1; i < report.length; i++) {
        var diff = report[i] - report[i - 1];
        difference.push(diff);
        //Checks if any two adjacent levels differ by at least one and at most three.
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }
    }
    var allIncreasing = difference.every(function (diff) { return diff > 0; });
    var allDecreasing = difference.every(function (diff) { return diff < 0; });
    return allIncreasing || allDecreasing;
}
safeReports = reports.filter(isReportSafe).length;
console.log('Total of safe reports: ', safeReports);
//example output: 3
//data output: 298 WRONG
