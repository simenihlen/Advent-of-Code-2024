/*
It seems like the goal of the program is just to multiply some numbers. It does that with instructions like mul(X,Y), 
where X and Y are each 1-3 digit numbers. For instance, mul(44,46) multiplies 44 by 46 to get a result of 2024. Similarly, mul(123,4) would multiply 123 by 4.

However, because the program's memory has been corrupted, there are also many invalid characters that should be ignored, 
even if they look like part of a mul instruction. Sequences like mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.

For example, consider the following section of corrupted memory:

xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))

Only the four highlighted sections are real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).
*/

import * as fs from 'fs'

const test = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'

const data = './data.txt'
const content = fs.readFileSync(data, 'utf-8')

//Will be using regex to find the correct phrase 'mul\((\d{1,3}),(\d{1,3})\)'
function validMul(mulString: string): number{
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g

    let match
    let sum = 0

    //regex.exec() puts the match of regex in mulString and puts it in the variable match
    while ((match = regex.exec(mulString)) !== null){
        const num1 = parseInt(match[1]) //First number
        const num2 = parseInt(match[2]) //Second number
        sum += num1 * num2 //multiply num1 and num2 and sum it
    }
    return sum
}

console.log("Total sum: ", validMul(data))
//test output: 161
//data output: