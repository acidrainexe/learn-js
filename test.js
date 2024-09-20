x = 10;

function scopes(){
    x = x + 5;
    console.log(x);
}

scopes();
console.log(x);