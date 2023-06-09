// Given a representation of a binary tree, implement a function that can traverse all nodes in prefix, infix, and postfix order

/** Tree:
*              A
*            /   \
*           B     C
*         /  \   /  \
*        D    E F    G
*              / \    \
*             H   I    J
*/
 const btree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'; 
// const bTree = '(AB,(C,(DEF),(G)),(H,(IJ),(S,,(K))))'; 
/**
* (VAL, LN, RN)
* VAL = Value [A-Za-z0-9]+
* LN = Left Node
* RN = Right Node 
*/
/**
* @param {String} tree  
* @param {String} order  'infix' (default) | 'prefix' | 'postfix'
*/
// function printTree(tree, order) {
//    /* Your implementation goes here */
// }

class Node
{
    constructor(element) {
       this.left = null;
       this.right = null;
       this.data = element;
    }
}



function parseTree(stringT){
   if(stringT == "") return null;
   let index = -1;

   function getValue(){
      let value="";
      while(stringT[index] != ")" && stringT[index]!=","){
         if (stringT[index] == "(" || stringT[index] == undefined) {
            throw new Error(`Unexpected ${stringT[index]} at position ${index} on string`);
          }
         value+= stringT[index];
         index++;
      }
      return value;
   }
   function createNode(){
      index++;
      let root;

      if(stringT[index]==")" || stringT[index]=="," ){
         return null
      }else if(stringT[index]=="("){
         index++;
         root = new Node(getValue());
         
      }else{
         throw new Error(`Unexpected token at position ${index} of string`)
      }

      if(stringT[index]==")"){
         index++;
         return root;
      }

      root.left = createNode();

      if (stringT[index] == ")") {
         index++;
         return root;
      }else if(stringT[index] !== ","){
         throw new Error(`, was expected in position ${index}`);
      }
   
      
      root.right = createNode();
      if (stringT[index] != ")") {
         throw new Error(`) was expected at end of string`);
      }

      index++;
   
      return root;


   }

   const tree = createNode();
   console.log(tree)

   if(stringT[index]!== undefined){
      throw new Error("Invalid syntax")
   }
   return tree
}

function printTree(tree, order = 'infix'){
   const parsedTree = parseTree(tree); 
   let str='';
   function printPostorder(node) {
      if (node == null || node.data ==" ")
         return;
   
      printPostorder(node.left);
      printPostorder(node.right);
      str+=(node.data+" ")
   }
   function printInorder(node) {
      if (node == null || node.data ==" ")
          return;
      printInorder(node.left);
   
      str+=(node.data+" ")
      
      printInorder(node.right);
   }
   function printPreorder(node) {
   if (node == null || node.data ==" ")
       return;
   
       str+=(node.data+" ")
   
   printPreorder(node.left);
   
   printPreorder(node.right);
   
   }

   if(order =='infix'){
      printInorder(parsedTree);

   }else if(order =='postfix'){
      printPostorder(parsedTree)
   }else if(order =='prefix'){
      printPreorder(parsedTree)
   }
   return str
}

let tree = "(A,(B)B)"

console.log("Tree:", parseTree(tree))


module.exports = printTree;

