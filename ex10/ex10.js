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
const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'; 
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
      return  tree.slice(1,-1).replace(/,,/, '( )').replace(/,/g,'')
   }
   function printPostorder(node) {
      if (node == null || node.data ==" ")
         return;
   
      printPostorder(node.left);
      printPostorder(node.right);
      str+=(node.data)
   }
   function printInorder(node) {
      if (node == null || node.data ==" ")
          return;
      printInorder(node.left);

      str+=(node.data)
      
      printInorder(node.right);
   }
   function printPreorder(node) {
   if (node == null || node.data ==" ")
       return;

       str+=(node.data)

   printPreorder(node.left);

   printPreorder(node.right);
   
   }
   let str='';
   let s = prepareStr(tree);
   let root = new Node(s[0]);
   let stk = [];
   for (let i = 1; i < s.length; i++){
 
      if (s[i]=='('){
         stk.push(root);

      }else if (s[i] == ')'){
         root = stk[stk.length - 1];
         stk.pop();

      }else{
         if (root.left == null) {
            let left = new Node(s[i]);
            root.left = left;
            root = root.left;

         }else if (root.right == null) {
            let right = new Node(s[i]);
            root.right = right;
            root = root.right;
         }
      }
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


module.exports = printTree






