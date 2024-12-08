/*
As you scan through the corrupted memory, you notice that some of the conditional statements are also 
still intact. If you handle some of the uncorrupted conditional statements in the program, you might be able to get an even more accurate result.

There are two new instructions you'll need to handle:

    The do() instruction enables future mul instructions.
    The don't() instruction disables future mul instructions.

Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.

For example:

xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))

This corrupted memory is similar to the example from before, but this time the mul(5,5) and mul(11,8) 
instructions are disabled because there is a don't() instruction before them. The other mul instructions function normally, 
including the one at the end that gets re-enabled by a do() instruction.

This time, the sum of the results is 48 (2*4 + 8*5).
*/

import * as fs from 'fs'

const test = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

const data = './data.txt'
const content = fs.readFileSync(data, 'utf-8')

//Will be using regex to find the correct phrase 'mul\((\d{1,3}),(\d{1,3})\)'
function validateMul(mulString: string): number{
    //regex for mul to find all mul()
    const mulReg = /mul\((\d{1,3}),(\d{1,3})\)/g

    //control regex to find all do and don't
    const controllReg = /\b(do|don't)\(\)/g

    let enabled = true
    let lastIndex = 0

    let match
    let sum = 0

    sum += processMul(test, mulReg, enabled)
    return sum
}

function processMul(mulString: string, regex: RegExp, enabled: boolean): number{

    let match
    let sum = 0

    //regex.exec() puts the match of regex in mulString and puts it in the variable match
    while ((match = regex.exec(mulString)) !== null){
        if (enabled){
            const num1 = parseInt(match[1]) //First number
            const num2 = parseInt(match[2]) //Second number
            sum += num1 * num2 //multiply num1 and num2 and sum it
        }
    }
    return sum
}

console.log("Total sum: ", validateMul(test))
//test output: 161
//data output: 159892596