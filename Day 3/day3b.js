"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var test = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
var data = './data.txt';
var content = fs.readFileSync(data, 'utf-8');
//Will be using regex to find the correct phrase 'mul\((\d{1,3}),(\d{1,3})\)'
function validateMul(mulString) {
    //regex for mul to find all mul()
    var mulReg = /mul\((\d{1,3}),(\d{1,3})\)/g;
    //control regex to find all do and don't
    /*
    Easier way to look at this:
    \ => target next
    \b => target words

    \b "(do OR don't)" ACTUALLY no need to use \b since that will interfere with instances such as undo() because \b goes for WORDS
    \"("
    \")"
    Also, use https://regexr.com/
    */
    var controllReg = /(do|don't)\(\)/g;
    var enabled = true;
    var lastIndex = 0;
    var match;
    var sum = 0;
    while ((match = controllReg.exec(mulString)) !== null) {
        //Collect the slice between lastIndex and match.index into chunk to process before controll instruction
        var chunk = mulString.slice(lastIndex, match.index);
        sum += processMul(chunk, mulReg, enabled);
        if (match[1] === "do") {
            enabled = true;
        }
        else if (match[1] === "don't") { //Had a bug where it was match[2] and I basically don't disable mul functions
            enabled = false;
        }
        lastIndex = controllReg.lastIndex; //Update lastIndex
    }
    var remainChunk = mulString.slice(lastIndex);
    sum += processMul(remainChunk, mulReg, enabled);
    return sum;
}
function processMul(mulString, regex, enabled) {
    var match;
    var sum = 0;
    //regex.exec() puts the match of regex in mulString and puts it in the variable match
    while ((match = regex.exec(mulString)) !== null) {
        if (enabled) {
            var num1 = parseInt(match[1]); //First number
            var num2 = parseInt(match[2]); //Second number
            sum += num1 * num2; //multiply num1 and num2 and sum it
        }
    }
    return sum;
}
console.log("Total sum: ", validateMul(content));
//test output: 48
//data output: 
