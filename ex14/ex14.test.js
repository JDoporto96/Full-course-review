const maxRectangle=require('./ex14');



const B =[[0,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,0,0,0,0],
[0,0,0,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,1,1,1,0,0,0]]

test("Return 22 as the maxArea of a rectangle in the matrix", ()=>{
    expect(maxRectangle(B)).toBe(22);
})

test("Return 0 as the matrix is empty", ()=>{
    expect(maxRectangle(null)).toBe(0);
})

test("Return 0 as the matrix is empty", ()=>{
    expect(maxRectangle([])).toBe(0);
})