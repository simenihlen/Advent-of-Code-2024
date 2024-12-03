import * as fs from 'fs'

const data = './example.txt'
const content = fs.readFileSync(data, 'utf-8')

const reports: number[] = []
let safeReports = 0

content.split('\n').forEach(line => {
    const [report] = line.split(/\s+/).map(Number)
    // isNaN() = checks if value is NaN
    if (!isNaN(report)){
        // adds report to reports
        reports.push(report)
    }
})