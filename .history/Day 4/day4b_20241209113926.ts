/*
Looking for the instructions, you flip over the word search to find that this isn't actually an 
XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:

M.S
.A.
M.S

Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.

Here's the same example from before, but this time all of the X-MASes have been kept instead:

.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........

In this example, an X-MAS appears 9 times.

Flip the word search from the instructions back over to the word search side and try again. How many times does an X-MAS appear?
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

    //Traverse the grid
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