function logMessage(message){
    console.log(message);
}

logMessage("Hello, world!");

var a=function(message){
    console.log(message);
}

a("Hello, world!"); 

const b=b_message =>{
    console.log(b_message);
}

b("Hello, world!");

//function can also be stored in an object
const obj={
    m:"haha",
    log(m){
        console.log(m);
    }
}

obj.log(obj.m);

//as array elements
const arr=[function(a){
    return a*a;
},3];

console.log(arr[0](arr[1]));
