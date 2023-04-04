const isSameLevel =require('./ex13');
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
let tree;

test("Return false as 1 cannot be found on the same level", ()=>{
    expect(isSameLevel(root,1,1)).toBeFalsy();
})

test("Return true as 3 cannot be found on the same level", ()=>{
    expect(isSameLevel(root,3,3)).toBeTruthy();
})

test("Return false as there are missing arguments", ()=>{
    expect(isSameLevel(root,3)).toBeFalsy();
})

test("Return false as there is no tree", ()=>{
    expect(isSameLevel()).toBeFalsy();
})