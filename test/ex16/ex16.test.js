const {findStartOfLoop, Node}= require('../../src/ex16/ex16')

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next.next.next = new Node(1);


test("Return null as the list is not looped", ()=>{
    expect(findStartOfLoop(head)).toBeNull();
})

test("Return the 4th node as it is the beginning of the loop", ()=>{
    head.next.next.next.next.next.next.next.next.next = head.next.next.next;
    expect(findStartOfLoop(head)).toEqual(head.next.next.next);
})



