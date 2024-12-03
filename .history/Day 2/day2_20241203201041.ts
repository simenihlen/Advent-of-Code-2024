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

function isReportSafe(report: number[]): boolean {
    if (report.length < 2) {
        return false
    }
    return
}

console.log(reports)

