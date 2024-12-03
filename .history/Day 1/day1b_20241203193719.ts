import * as fs from 'fs'

const data = './data.txt'
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

// Make variables for the type of map, using record here will give number and amount of said number
// It will act as a frequency counter
const frequencyMap: Record<number, number> = {}
let simularity = 0


for (const num of rightArray){
    frequencyMap[num] = (frequencyMap[num] || 0) + 1
}

for (const num of leftArray){
    const frequency = frequencyMap[num] || 0
    simularity += num * frequency
}

console.log('Simularity: ', simularity)
//example output: 31
//data output: 24643097