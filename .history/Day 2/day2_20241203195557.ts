import * as fs from 'fs'

const data = './example.txt'
const content = fs.readFileSync(data, 'utf-8')

const reports: number[] = []
let safeReports = 0

content.split('\n').forEach(line => {
    // /\s+/ regex for spaces, so here it will split the array at the space between
    const [report] = line.split(/\s+/).map(Number)
    // isNaN() = checks if value is NaN
    if (!isNaN(report)){
        reports.push(report)
    }
})