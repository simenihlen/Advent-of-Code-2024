import * as fs from 'fs'

const example = './example.txt'
const content = fs.readFileSync(example, 'utf-8')

const leftArray: number[] = []
const rightArray: number[] = []

content.split('\n').forEach(line => {
    const [left, right] = line.split(/\s+/).map(Number)
    if (!isNaN(left) && !isNaN(right)){
        leftArray.push(left)
        rightArray.push(right)
    }
})