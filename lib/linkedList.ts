
import {Node} from './node.js'
export class LinkedList{
    private head : Node | null;
    private len: number ;

    constructor(){
        this.head = null;
        this.len = 0;
    }

    // addNode(value:number): void{
    //     let node = new Node(value);
    //     let current:Node;

    //     if(this.head === null){
    //         this.head = node;
    //     }else{
    //         current = this.head;
    //         while(current.next){
    //             current = current.next;
    //         }
    //         current.next = node;
    //     }
    //     this.len++;
    // }

    addNode(value: number): void{
        let node = new Node(value);

        // set the node as head of the list when the list is empty (first node added)
        if(!this.head){
            this.head = node;
        }else{
            // recursive function to get the last node and add the new node in the end
            const getLast=(node: Node): Node =>{
                return node.next ? getLast(node.next) : node;
            }

            const lastNode = getLast(this.head);
            lastNode.next = node;
        }
        this.len++;
    }

    removeNodes(x: number): void{
        // check if the list is empty then return
        if(!this.head) return; 

        // start with the first node checking
        while(this.head && this.head.data > x){
            this.head = this.head.next;
            this.len--;
        }

        // now we are in the first node where data < x, we want to check if the next node data is greater than x
        let current = this.head;
        while(current?.next){
            if(current.next.data > x){
                current.next = current.next.next;
                this.len--;
            }else{
                current = current.next
            }
        }
    }

}
