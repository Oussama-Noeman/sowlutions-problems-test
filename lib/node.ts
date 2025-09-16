export class Node{
    public data:number;
    public next:Node | null;
    constructor(data:number){
        this.data = data;
        this.next = null;
    }
}

