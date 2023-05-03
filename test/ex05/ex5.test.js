const reverseBlocks = require('../../src/ex05/ex5');

const arr = [0,1,2,3,4,5,6,7,8,9];
const blockSize = 3;

test("reverse blocks of size 3 inside the array", ()=>{
    expect(reverseBlocks(arr, blockSize)).toEqual([2,1,0,5,4,3,8,7,6,9]);
})

test("return an empty array if input is empty array ", ()=>{
    expect(reverseBlocks([], blockSize)).toEqual([]);
})
