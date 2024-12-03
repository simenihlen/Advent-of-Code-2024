import * as fs from 'fs'

const data = './example.txt'
const content = fs.readFileSync(data, 'utf-8')

let safeReports = 0

const reports: number[][] = content.split('\n') //split at each newline
    .filter(line => line.trim() !== '') //removes empty lines
    .map(line => line.split(/\s+/).map(Number)) //same as day1: converts each line to an array of numbers
/* [ outputs this: :)))
  [ 7, 6, 4, 2, 1, 0 ],
  [ 1, 2, 7, 8, 9, 0 ],
  [ 9, 7, 6, 2, 1, 0 ],
  [ 1, 3, 2, 4, 5, 0 ],
  [ 8, 6, 4, 4, 1, 0 ],
  [ 1, 3, 6, 7, 9, 0 ]
]*/

//Make function to be able to check each element in the reports array
function isReportSafe(report: number[]): boolean {
    const difference = []
    for (let i = 1; i < report.length; i++){
        const diff = report[i] - report[i - 1]
        difference.push(diff)
        //Checks if any two adjacent levels differ by at least one and at most three.
        if (Math.abs(diff) <= 1 && Math.abs(diff) >= 3){
            return false
        }
    }

    const allIncreasing = difference.every(diff => diff > 0)
    const allDecreasing = difference.every(diff => diff < 0)

    return allIncreasing || allDecreasing
}

safeReports = reports.filter(isReportSafe).length

console.log(reports)
console.log('Total of safe reports: ', safeReports)
//example output: 2
//data output: 298 WRONG