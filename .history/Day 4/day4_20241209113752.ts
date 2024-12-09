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

const content = fs.readFileSync(data, 'utf-8')

//parse into 2D array
const grid = content.split('\n').map(line => line.trim().split(''))
//DUUUH
const word = "XMAS"

function countWords(grid: string[][], word: string): number {
    let count = 0
    const rows = grid.length
    const cols = grid[0].length

    /* view of what each offset does
    [-1,-1][-1,0][-1,1]
    [0,-1] [....][0,1]
    [1,-1] [1,0] [1,1]
    */
    const directions = [
        [0,-1],
        [0,1],
        [1,0],
        [-1,0],
        [1,1],
        [-1,-1],
        [1,-1],
        [-1,1]
    ]
    //function to check if a word exists starting at (r row, c column) in a specific direction
    function isWordAt(r: number, c: number, dr: number, dc: number): boolean{
        for (let i = 0; i < word.length; i++){
            const newRow = r + i*dr //new row to check
            const newCol = c + i*dc //new column to check

            if (newRow < 0 || newRow >= rows || //check if out of bounds x-axis
                newCol < 0 || newCol >= cols || //check if out of bounds y-axis
                grid[newRow][newCol] !== word[i]){ //check if the letter on grid[newRow][newCol] matches any of the letters in word[i]
                return false
            }
        }
        return true
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            for(const[dr,dc] of directions){
                if(isWordAt(r,c,dr,dc)){
                    count++
                }
            }
        }
    }
    return count
}


console.log(countWords(grid,word))
//example output: 18
//data output: 