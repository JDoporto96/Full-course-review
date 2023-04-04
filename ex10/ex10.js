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
// const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'; 
const bTree = '(AB,(C,(DEF),(G)),(H,(IJ),(S,,(K))))'; 
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
function printTree(tree, order = 'infix'){
   function prepareStr(tree){
      if(tree[0]!="("){
         throw new Error(`Unexpected character: (${tree[0]}) at start of string`)
      }
      if(tree[tree.length-1]!=")"){
         throw new Error(`Unexpected character: (${tree[tree.length-1]}) at end of string`)
      }
      return  tree.slice(1,-1).replace(/,,/, '( )').replace(/,/g,'')
   }
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
   let str='';
   let s = prepareStr(tree);
   let value="";
   let i= 0;
   while(s[i] && s[i]!="("){
      value += s[i];
      i++
   }
   let root = new Node(value);
   value="";

   let stk = [];
   while (i < s.length ){
      if (s[i]=='('){
         stk.push(root);

      }else if (s[i] == ')'){
         root = stk[stk.length - 1];
         stk.pop();

      }else{
         while(s[i]!="(" && s[i]!=")"){
            value += s[i];
            if(s[i+1]=="(" || s[i+1]==")") break
            i++
         }

         if (root.left == null) {
            let left = new Node(value);
            value="";
            root.left = left;
            root = root.left;

         }else if (root.right == null) {
            let right = new Node(value);
            value="";
            root.right = right;
            root = root.right;
         }
      }

      i++
   }
   
   if(order =='infix'){
      printInorder(root);

   }else if(order =='postfix'){
      printPostorder(root)
   }
   if(order =='prefix'){
      printPreorder(root)
   }
   return str
}

console.log(printTree("(A,(B,C,d))"))

module.exports = printTree






