import * as fs from 'fs'

const data = './data.txt'
const test = './example.txt'

const content = fs.readFileSync(test, 'utf-8')

