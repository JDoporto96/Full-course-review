class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

function findStartOfLoop(head){
	let stk = new Set();
		
	let element = head;

	while (element != null){

        if(stk.has(element)){
            return element;

        }else{
            stk.add(element);
        }

        element = element.next;
	}
	return null;
}


     
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next.next.next = new Node(1);

head.next.next.next.next.next.next.next.next.next = head.next.next.next;


module.exports={findStartOfLoop, Node}


