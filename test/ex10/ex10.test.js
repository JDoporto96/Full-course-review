const printTree = require("../../src/ex10/ex10")
const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'; 

test("Return a string with the tree traverse in infix order", ()=>{
   expect(printTree(bTree,"infix")).toBe("D B E A H F I C G J ")
})
test("Return a string with the tree traverse in prefix order", ()=>{
   expect(printTree(bTree,"prefix")).toBe("A B D E C F H I G J ")
})
test("Return a string with the tree traverse in postfix order", ()=>{
   expect(printTree(bTree,"postfix")).toBe("D E B H I F J G C A ")
})

const errTree = "(A,(B),(C)"
test("Throw an error as a ) is missing at the end of string", ()=>{
   try{
      printTree(errTree,"postfix")
   }catch(e){
      expect(e.message).toBe(") was expected at end of string")
   }
})

test("Throw an error as a ()() is an invalid syntax", ()=>{
   try{
      printTree(errTree,"postfix")
   }catch(e){
      expect(e.message).toBe("Invalid syntax")
   }
})






