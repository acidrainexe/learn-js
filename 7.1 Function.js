let output = '';
function test1() {
    //accessing global variable inside local scope
    output = 'hello'; 
}
test1();
console.log(output);

//in this case using return statement seems better
//as the function no longer has dependecies outside the function
function test2() {
    return 'hello'; 
}    
output = test2();
console.log(output);
