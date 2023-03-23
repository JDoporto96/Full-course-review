const symmetricTree = require('./ex12')

const aTree= "(1,(2,(3),(4,(5), )),(2,(4, ,(5)),(3)))"
const bTree= "(1,(2,(3),(4,(3), )),(2,(4, ,(5)),(3)))"

test("return true as the tree is symmetric", ()=>{
    expect(symmetricTree(aTree)).toBeTruthy();
})

test("return false as the tree is asymmetric", ()=>{
    expect(symmetricTree(bTree)).not.toBeTruthy();
})

test("return a string as the tree is too small to prove symmetry", ()=>{
    expect(symmetricTree("(A)")).toBe("Need more than one element to prove symmetry");
})

