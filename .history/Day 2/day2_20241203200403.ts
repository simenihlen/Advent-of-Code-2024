import * as fs from 'fs'

const data = './example.txt'
const content = fs.readFileSync(data, 'utf-8')

let safeReports = 0

const reports: number[][] = content.split('\n')
    .filter(line => line.trim() !== '')
    .map(line => line.split(/\s+/).map(Number))
/* [ outputs this: :)))
  [ 7, 6, 4, 2, 1, 0 ],
  [ 1, 2, 7, 8, 9, 0 ],
  [ 9, 7, 6, 2, 1, 0 ],
  [ 1, 3, 2, 4, 5, 0 ],
  [ 8, 6, 4, 4, 1, 0 ],
  [ 1, 3, 6, 7, 9, 0 ]
]*/

console.log(reports)

