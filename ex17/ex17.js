// Given a single linked list as input, Determine if the contents is a palindrome
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(2);
// head.next.next.next.next = new Node(1);



function isPalindrome(head){
   if(!head || !head.next) return true;
   const stk = [];
   let m = head;
   let n = head;
   let length= 1;

   while(n.next?.next){
    stk.push(m.key);
    m = m.next;
    n = n.next?.next;
    length +=2;
   }

   stk.push(m.key);
   length += n.next? 1:0

   let check = m.next;
   let index = stk.length-1;
   if(length%2 != 0) index --;

   while(check){
    if(check.key != stk[index]) return false;

    check = check.next;
    index--;

   }
   return true

}

console.log(isPalindrome(head))

module.exports= {isPalindrome, Node};