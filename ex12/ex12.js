// Traverse a binary tree and determine if the tree is symmetric. 

const bTree= "(1,(2,(3),(4,(5), )),(2,(4, ,(5)),(3)))"



class Node{
    constructor(element) {
       this.left = null;
       this.right = null;
       this.data = element;
    }
}
function symmetricTree(tree, order = 'infix'){
   function prepareStr(tree){
      return tree.slice(1,-1).replace(/ /g,'( )').replace(/,/g,'')
   }
   function printInorder(node) {
      if (node == null ||node.data == null || node.data==" "){
         return
      }
        
      printInorder(node.left);
   
      str+=(node.data)

      printInorder(node.right);
   }
   function checkSymmetry(str){
    if(str.length < 2){
        return "Need more than one element to prove symmetry"
    }
    let chain = str
    while(chain.length>=2){
        if (chain[0] === chain[chain.length -1]){
            chain = chain.slice(1,-1)
        }else{
            return false
        }
    }
    return true
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

   printInorder(root);
   return checkSymmetry(str)
}

const tree = "(A,(B,(C)),(B, ,()))"
console.log(symmetricTree(tree))

module.exports=symmetricTree;


