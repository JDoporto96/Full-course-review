const {flattenArray, flattenArrayIt} = require('./ex9');

const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]

test("return the flatten array recursively", ()=>{
    expect(flattenArray(input)).toEqual([1,2,3,4,5,6,7,8,9,10]);
})

test("return the flatten array iteratively", ()=>{
    expect(flattenArrayIt(input)).toEqual([1,2,3,4,5,6,7,8,9,10]);
})

test("return the input which is not an array", ()=>{
    expect(flattenArray("input")).toBe("input");
})

