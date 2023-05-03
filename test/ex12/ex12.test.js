const symmetricTree = require('../../src/ex12/ex12')

const aTree= "(1,(2,(3),(4,(5),)),(2,(4,,(5)),(3)))"
const bTree= "(1,(2,(3),(4,(3),)),(2,(4,,(5)),(3)))"

test("return true as the tree is symmetric", ()=>{
    expect(symmetricTree(aTree)).toBeTruthy();
})

test("return false as the tree is asymmetric", ()=>{
    expect(symmetricTree(bTree)).not.toBeTruthy();
})

test("return true as the only node tree is symmetric", ()=>{
    expect(symmetricTree("(A)")).toBeTruthy();
})

