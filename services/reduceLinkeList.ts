import type { LinkedList } from "../lib/linkedList.js";

export function reduceLinkedList(list:LinkedList, x:number): LinkedList{
    let reducedList = list;
    reducedList.removeNodes(x);
    return reducedList;
}