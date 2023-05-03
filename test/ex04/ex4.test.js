const mergeArrays = require('../../src/ex04/ex4')


test("mergeArrays merge both arrays into a sorted array", ()=>{
    
    const largeArray = [1,3,5,7,9].concat(new Array(5));
    const smallArray = [0,2,4,6,8];
    const res = mergeArrays(largeArray, smallArray)
    const output = [0,1,2,3,4,5,6,7,8,9]
    expect(res.length).toBe(output.length);
    expect(res).toEqual(expect.arrayContaining(output));
})

test("merging a larger array into a smaller should throw an error",()=>{
    const arr1 = [1,3,5,7,9];
    const arr2 = [0,2,4,6,8,10];
    try{
        mergeArrays(arr1, arr2)
    }catch(e){
        expect(e.message).toBe("arr1 must have enough space to fit arr2 inside of it")
    }
    
})