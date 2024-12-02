import * as fs from 'fs';

const example = './example.txt';

const content = fs.readFileSync(example, 'utf-8');

console.log(content)