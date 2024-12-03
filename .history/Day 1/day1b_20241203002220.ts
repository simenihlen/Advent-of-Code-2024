import * as fs from 'fs'

const data = './example.txt'
const content = fs.readFileSync(data, 'utf-8')

const leftArray: number[] = []
const rightArray: number[] = []

content.split('\n').forEach(line => {
    // /\s+/ regex for spaces, so here it will split the array at the space between
    const [left, right] = line.split(/\s+/).map(Number)
    // isNaN() = checks if value is NaN
    if (!isNaN(left) && !isNaN(right)){
        leftArray.push(left)
        rightArray.push(right)
    }
})
//TODO make a map of the right side
const frequencyMap: Record<number, number> = {}

for (const num of rightArray){
    frequencyMap[num] = (frequencyMap[num] || 0) + 1
}

let simularity = 0
for (const num of leftArray){
    const 
}

console.log('Simularity: ', rightMap)
//example output: 
//data output: 