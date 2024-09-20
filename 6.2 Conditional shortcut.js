condition = true;

if(condition)
    console.log('hello');
//shortcut:
condition && console.log('hello'); 

if(condition)
    message = 'hello';
//shortcut:
message = condition && 'hello'; 

//guard operator is a short circuit evaluation
//code stops early when the first part is false 

let currencySet = '';
if(!currencySet) 
    currencySet = 'USD';
//shortcut:
currencySet = currencySet || 'USD';
//default operator also stops early when the first part is truthy

if(condition)
    console.log('hello');
else
    console.log('bye');
//shortcut:
condition ? console.log('hello') : console.log('bye');
//shortcut:
message = condition ? 'hello' : 'bye';
//ternary operator is basically if else branch
