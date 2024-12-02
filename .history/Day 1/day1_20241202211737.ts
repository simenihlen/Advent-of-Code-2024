import * as fs from 'fs';

const example = './example.txt';

fs.readFile(example, 'utf-8', (err, data) =>{
    if (err){
        console.error('',err);
        return;
    }
    console.log(example);
});