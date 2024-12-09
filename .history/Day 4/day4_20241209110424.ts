/*
As the search for the Chief continues, a small Elf who lives on the 
station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). 
She only has to find one word: XMAS.

This word search allows words to be horizontal, vertical, diagonal, written backwards,
 or even overlapping other words. It's a little unusual, though, as you don't merely need to 
 find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, 
 where irrelevant characters have been replaced with .:

..X...
.SAMX.
.A..A.
XMAS.S
.X....

The actual word search will be full of letters instead. For example:

MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX

In this word search, XMAS occurs a total of 18 times; here's the same word search again, 
but where letters not involved in any XMAS have been replaced with .:

....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX

Take a look at the little Elf's word search. How many times does XMAS appear?
*/

import * as fs from 'fs'

const data = './data.txt'
const test = './example.txt'

const content = fs.readFileSync(test, 'utf-8')

//2D array
const grid = content.split('\n').map(line => line.trim().split(''))

const word = "XMAS"


function countWords(grid: string[][], word: string): number {
    let count = 0
    const rows = grid.length
    const cols = grid[0].length

    /*
    [-1,-1][-1,0][-1,1]
    [0,-1] [....][0,1]
    [1,-1] [1,0] [1,1]
    */
    const directions = [
        [-1,-1],
        [-1,0],
        [-1,1],
        [0,-1],
        [0,1],
        [1,-1],
        [1,0],
        [1,1]
    ]
    //function to check if a word exists starting at (r row, c column) in a specific direction
    function isWordAt()

    return count
}


console.log(grid)
//example output:
//data output: 