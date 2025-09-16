export function isValidBracketSequence(text:string):boolean {
    if(text === '' || text.length === 1) return false;
    let stack:string[] = []; // to represent the openings brackets in the string
    let map = {')':'(',']':'[','}':'{'};

    // loop over the string
    for(let char of text){
        // check if the char is an opening bracket, if yes then add it to the stack
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        }else if(char === ')'|| char === ']' || char === '}'){ 
            // in the case of the char is closing bracket, check first if the stack is empty then this closed bracket doesn't have an opening bracket
            //  or the char is different of the final opening bracket added to the task 
            if(stack.length === 0 || stack.pop() !== map[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
}