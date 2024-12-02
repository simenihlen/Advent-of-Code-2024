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
// have to use (a,b) => a - b because js is weird and doesn't like using sort() on numbers. 
// sort() by itself works great when sorting an array alphabetically
leftArray.sort((a,b) => a - b)
rightArray.sort((a,b) => a - b)

// reduce iterates through every element of the array it is called on
// reduce(accumulator, currentValue, index, array), accumulator = sum, currentValue = leftNum, index = i, array = 0
// sum = variable where we put the sum of the two numbers, the starting value is 0
// leftNum = current value of the element of the indexed array of leftArray
// i = the current index we have iterated
// 0 = the starting value of the index
const totalDistance = leftArray.reduce((sum, leftNum, i) => {
    return sum + Math.abs(leftNum - rightArray[i])
}, 0)

console.log('Total distance: ', totalDistance)
//example output: 11
//data output: 2769675