const isSameLevel =require('../../src/ex13/ex13');
class Node{
    constructor(element) {
       this.value = element;
       this.children=[];
    }
}

let root = new Node(0)
root.children.push(new Node(1))
root.children.push(new Node(2))
    root.children[1].children.push(new Node(1))
    root.children[1].children.push(new Node(5))
        root.children[1].children[1].children.push(new Node(3))
        root.children[1].children[1].children.push(new Node(5))
            root.children[1].children[1].children[1].children.push(new Node(6))
        root.children[1].children[1].children.push(new Node(9))
root.children.push(new Node(3))
root.children[2].children.push(new Node(0))
root.children.push(new Node(5))
root.children.push(new Node(7))
    root.children[4].children.push(new Node(3))
        root.children[4].children[0].children.push(new Node(3))
        root.children[4].children[0].children.push(new Node(0))
            root.children[4].children[0].children[1].children.push(new Node(9))
            root.children[4].children[0].children[1].children.push(new Node(4))


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