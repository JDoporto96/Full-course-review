// Given a single linked list as input, Determine if the contents is a palindrome
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

function isPalindrome(head){
    const stk = [];
    let element = head;
	while (element != null){
       stk.push(element.key)
       element=element.next
    }

    element = head; 

    while (element != null){
        if(stk.pop()!= element.key){
            return false
        }
        element=element.next
    }

    return true
    

}

module.exports= {isPalindrome, Node};