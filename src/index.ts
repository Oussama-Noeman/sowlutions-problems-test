import { LinkedList } from "../lib/linkedList.js";
import { isValidBracketSequence } from "../services/isValidBracketSequence.js";
import { parseCSV, probabilityToBeatBoss } from "../services/probabilityToBeatBoss.js";
import { reduceLinkedList } from "../services/reduceLinkeList.js";
import { validateEmail } from "../services/validateEmail.js";

// Problem 1:Email Checking
// console.log(validateEmail('john.doe@gmail.com'))
// console.log(validateEmail('john@doe@gmail.com'))
// console.log(validateEmail('john@gmail.c'))
// console.log(validateEmail('john@.com'))

// Problem 2: 
// parseCSV('./assets/prediction.csv');
// probabilityToBeatBoss('Hearts','Lion','Mango');

// Problem 3:
// let list = new LinkedList();
// list.addNode(10);
// list.addNode(5);
// list.addNode(12);
// list.addNode(7);
// list.addNode(3);
// list.addNode(9);
// list.addNode(10);
// console.log('old list'+JSON.stringify(list));
// console.log('new list'+JSON.stringify(reduceLinkedList(list,7)))

// Problem 4:
console.log(isValidBracketSequence('()[]{}'))
console.log(isValidBracketSequence('([{}])'))
console.log(isValidBracketSequence('('))
console.log(isValidBracketSequence('[(])'))
console.log(isValidBracketSequence('{[}]'))








