function multiply(a,b){
    console.log(a*b);
}
multiply(23,35);



// This is IIFE Function (Imediately invoked function expression)
(function(a,b){
    console.log(a+b);
})(10,20)


function addition(a,b,c){
    return a+b+c;
}
console.log(addition(10,20,30));