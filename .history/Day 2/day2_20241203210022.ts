import * as fs from 'fs'

const data = './example.txt'
const content = fs.readFileSync(data, 'utf-8')

let safeReports = 0

const test: number[][] = [[19, 22, 24, 27, 28, 30, 31, 32]]

const reports: number[][] = content.trim()
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(Number)) //same as day1: converts each line to an array of numbers
/* [ outputs this: (((:
  [ 7, 6, 4, 2, 1 ],
  [ 1, 2, 7, 8, 9 ],
  [ 9, 7, 6, 2, 1 ],
  [ 1, 3, 2, 4, 5 ],
  [ 8, 6, 4, 4, 1 ],
  [ 1, 3, 6, 7, 9 ]
]*/

//Make function to be able to check each element in the reports array
function isReportSafe(report: number[]): boolean {
    const difference = []
    for (let i = 1; i < report.length; i++){
        const diff = report[i] - report[i - 1]
        difference.push(diff)
        //Checks if any two adjacent levels differ by at least one and at most three.
        if (Math.abs(diff) > 1 || Math.abs(diff) < 3){
            return false
        }
    }

    const allIncreasing = difference.every(diff => diff > 0)
    const allDecreasing = difference.every(diff => diff < 0)

    return allIncreasing || allDecreasing
}

safeReports = reports.filter(isReportSafe).length
const testReport = test.filter(isReportSafe).length

console.log('Parsing', reports)
console.log('Test: ',testReport)
console.log('Total of safe reports: ', safeReports)
//example output: 2
//data output: 298 WRONG