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

// Here, we say that if frequencyMap[num] is undefined = put counter to 0, if not then increment counter by 1 for said value
for (const num of rightArray){
    frequencyMap[num] = (frequencyMap[num] || 0) + 1
}

// Here we do the same thing, but count how many times the number in the left array show up in the right array
for (const num of leftArray){
    const frequency = frequencyMap[num] || 0
    // finally we sum up the simular numbers and add it to a variable we output
    simularity += num * frequency
}

console.log('Simularity: ', simularity)
//example output: 31
//data output: 24643097