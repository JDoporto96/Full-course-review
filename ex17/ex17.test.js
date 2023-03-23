const {isPalindrome, Node}= require('./ex17');

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

test("Return true as the list is a palindrome", ()=>{
    expect(isPalindrome(head)).toBeTruthy();
})

test("Return false as the list is not a palindrome", ()=>{
    head.next.next.next.next = new Node(2);
    expect(isPalindrome(head)).not.toBeTruthy();
})

