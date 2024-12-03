import * as fs from 'fs'

const data = './data.txt'
const content = fs.readFileSync(data, 'utf-8')

let safeReports = 0

const reports: number[][] = content.trim()
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(Number)) //same as day1: converts each line to an array of numbers

//Make function to be able to check each element in the reports array
function isReportSafe(report: number[]): boolean {
    const difference = []
    for (let i = 1; i < report.length; i++){
        const diff = report[i] - report[i - 1]
        difference.push(diff)
        //Checks if any two adjacent levels differ by at least one and at most three.
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3){
            return false
        }
    }

    const allIncreasing = difference.every(diff => diff > 0)
    const allDecreasing = difference.every(diff => diff < 0)

    return allIncreasing || allDecreasing
}

function isSafeWithDampener(report: number[]): boolean {
    if (isReportSafe(report)){
        return true
    }
    for (let i = 0; i < report.length; i++){
    
    }
    return
}

safeReports = reports.filter(isReportSafe).length

console.log('Total of safe reports: ', safeReports)
//example output: 3
//data output: 483