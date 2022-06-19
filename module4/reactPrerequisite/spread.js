// Spread operator with array

let arr = [1,2,3,4,5]
let arr2 = [...arr];

arr2[2] = 10;

console.log(arr);
console.log(arr2);

// spread operator with objects

let obj = {
    name: "Adam",
    age: 21,
    Address: {
        country: "India",
        state:{
            stateName: "Delhi",
            pinCode: 110019
        }
    }
}

// Shallow copy:

let obj2 = {...obj};
obj2.name = "Aman";

obj2.Address.country = "USA";

console.log(obj.name);
console.log(obj.address);
console.log("###################");
console.log(obj2.name);
console.log(obj2.address);

//deep copy:
let obj3 = JSON.parse(JSON.stringify(obj));

obj3.Address.country = "Japan";

console.log(obj.Address.country);
console.log(obj3.Address.country);