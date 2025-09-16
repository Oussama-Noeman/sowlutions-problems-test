export function validateEmail(email:string):boolean{
    /* Regular Expression Demontration:
        Divise the email to 3 parts:
        - the username : allowing alphanumeric charcters and some characters like -.+- and cannot start with @ then the expression for this is ^[a-zA-Z0-9._%+-]
        - the @ : seperate the 2 other parts
        - the domain : allowing letter, digit, dots and hyphen => [a-zA-Z0-9.-]
                       after it should contain a dot 
                       after the dot allowing letter only minimum 2 characters

    */
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return regex.test(email);
}