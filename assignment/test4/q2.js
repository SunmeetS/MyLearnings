// Q- using generators write a function that in theory can run an infinite for loop

function* infinite(){
    let index = 0;
    for(let i = 0; ; ){
        yield index++;
    }
}

const generator = infinite()

console.log(generator.next().value)
console.log(generator.next().value)