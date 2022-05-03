class Node
{
    constructor(val, next=null)
    {
        this.val = val;
        this.next = next;
    }
}

export default class LinkedList {
    constructor()
    {
        this.head = null;
    }

    // Adds a node to the front of the list 
    appendToHead(val)
    {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Removes a node from the front of the list
    removeFromFront()
    {
        if(this.isEmpty())
        {
            throw new Error('Cannot remove from an empty list');
        }

        this.head = this.head.next;
    }

    // Checks if the list is empty
    isEmpty()
    {
        return this.head === null;
    }


    // Reverses the contents of the list and returns the new head of the list
    reverseList()
    {
        let cur = this.head;
        let prev = null;
        while(cur !== null)
        {
            let tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp;
        }

        return prev;
    }

    // Returns a string representation of the current list
    toString()
    {
        let sb = [];
        let cur = this.head;
        while(cur !== null)
        {
            sb.push(`${cur.val} -> `);
            cur = cur.next;
        }

        return sb.join('');
    }
}