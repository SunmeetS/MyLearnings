// find output: 
function resolveAfterNSeconds(n,x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, n);
  });
}


(function(){
    let a = resolveAfterNSeconds(1000,1)
    a.then(async function(x){
        let y = await resolveAfterNSeconds(2000,2)
        let z = await resolveAfterNSeconds(1000,3)
        let p = resolveAfterNSeconds(2000,4)
        let q = resolveAfterNSeconds(1000,5);
        console.log(x+y+z+await p +await q);
        //(x+y+z+p + q) if we wont use await it will give promise because it wouldnot run asynchronously
    })
})()

answer : 1+2+1+2



// options:

// A) 15 after 6 seconds 

// B) 15 after 7 seconds