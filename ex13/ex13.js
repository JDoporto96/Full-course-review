// Given the root of a tree, write a function that takes two numbers, n1 and n2. Search for these two numbers within the tree and indicate if they are found at the same depth.

// 	isSameLevel(tree,1,1) //The number 1 is not found in the same level anywhere
// 	isSameLevel(tree,3,3) //The number 3 can be found in the same depth level

class Node{
    constructor(element) {
       this.value = element;
    }
}

let root = new Node(0)
root.branch1 = new Node(1)
root.branch2 = new Node(2)
    root.branch2.branch1= new Node(1)
    root.branch2.branch2= new Node(5)
        root.branch2.branch2.branch1= new Node(3)
        root.branch2.branch2.branch2= new Node(5)
            root.branch2.branch2.branch2.branch1= new Node(6)
        root.branch2.branch2.branch3= new Node(9)
root.branch3 = new Node(3)
    root.branch3.branch1= new Node(0)
root.branch4 = new Node(5)
root.branch5 = new Node(7)
    root.branch5.branch1= new Node(3)
        root.branch5.branch1.branch1= new Node(3)
        root.branch5.branch1.branch2= new Node(0)
            root.branch5.branch1.branch2.branch1= new Node(9)
            root.branch5.branch1.branch2.branch2= new Node(4)

function isSameLevel(tree, n1, n2){
    const getLevels = (root) =>{
        const M = {};
        
        let q =[];
        q.push(root);
        let lvl =1;
    
        while(q.length!=0){
            
            let stack = [];
            let tempArr=[];
            while(q.length!=0){
                let node = q.shift();
                tempArr.push(node.value)
                for(prop in node){
                    if(prop !="value"){
                        stack.push(node[prop])
                    }
                }
            }
            q=stack;
    
            M[lvl]=tempArr;
            lvl++;
        }
    
        return M
    }
    if(!n1 || !n2){
        return false
    }

    if(!root){
        return false
    }
    const treeLvls = getLevels(tree)

    for(prop in treeLvls){
        if(n1!=n2){
            if (treeLvls[prop].includes(n1) && treeLvls[prop].includes(n2)){
                return true
            }
        }else{
            if(treeLvls[prop].filter(el=>el===n1).length > 1){
                return true
            }
        }
       
    }
    return false
    
}

console.log(isSameLevel(root,1,0))

module.exports =isSameLevel;
