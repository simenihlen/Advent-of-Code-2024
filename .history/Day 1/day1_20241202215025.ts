import * as fs from 'fs';

const example = './example.txt';
const content = fs.readFileSync(example, 'utf-8');

const leftArray: number[] = []
const rightArray: number[] = []