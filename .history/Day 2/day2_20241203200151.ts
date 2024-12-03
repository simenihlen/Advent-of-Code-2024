import * as fs from 'fs'

const data = './example.txt'
const content = fs.readFileSync(data, 'utf-8')

let safeReports = 0

const reports: number[][] = content.split('\n')
    .filter(line => line.trim() !== '')
    .map(line => line.split(/\s+/).map(Number))

console.log(reports)

