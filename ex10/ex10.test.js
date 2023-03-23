const printTree = require("./ex10")
const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'; 

test("Return a string with the tree traverse in infix order", ()=>{
   expect(printTree(bTree,"infix")).toBe("DBEAHFICGJ")
})
test("Return a string with the tree traverse in prefix order", ()=>{
   expect(printTree(bTree,"prefix")).toBe("ABDECFHIGJ")
})
test("Return a string with the tree traverse in postfix order", ()=>{
   expect(printTree(bTree,"postfix")).toBe("DEBHIFJGCA")
})






