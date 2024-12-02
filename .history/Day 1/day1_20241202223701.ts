import * as fs from 'fs'

const example = './example.txt'
const content = fs.readFileSync(example, 'utf-8')

const leftArray: number[] = []
const rightArray: number[] = []

content.split('\n').forEach(line => {
    // /\s+/ regex for spaces, so here it will split the array at the space between
    const [left, right] = line.split(/\s+/).map(Number)
    //isNaN() = checks if value is NaN
    if (!isNaN(left) && !isNaN(right)){
        leftArray.push(left)
        rightArray.push(right)
    }
})
//have to use (a,b) => a - b because js is weird and doesn't like using sort() on numbers. 
// sort() by itself works great when sorting an array alphabetically
leftArray.sort((a,b) => a - b)
rightArray.sort((a,b) => a - b)

// reduce(func, initial value before adding up)
const totalDistance = leftArray.reduce((sum, j, i) => {
    return sum + Math.abs(rightArray[j] - rightArray[i])
}, 0)

console.log('Total distance: ', totalDistance)
//example output: 11