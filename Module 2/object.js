obj = {};

objSunmeet={
    Name: "Sunmeet",
    Age: 22,
    Occupation: "SDE at Cred",
    "Phone number": 8800226705
};  
console.log(objSunmeet);        

let capAmerica = {
    Name:"Steve",
    Age:9999,
    Friends:["Tony stark", "Wonder women", "Thor is enemy"],
    Address:{
        "City":"Queens",
        State:"New York"
    },
    saysHi: function(){
        console.log("Cap America says Hiiiiiiiiiiii");
    }
}
console.log(capAmerica);
console.log(capAmerica.Address.City)
console.log(capAmerica.Name);
console.log(capAmerica.Age);
console.log(capAmerica.Friends);
console.log(capAmerica.Address);
console.log(capAmerica.saysHi());
console.log(capAmerica.Friends[0])

// Adding a Key to Object
console.log("Object before adding element:", capAmerica)
capAmerica.result="Pass";
console.log("Object after adding element:", capAmerica)

delete capAmerica.result
console.log("Object after deleting element:", capAmerica)

delete capAmerica.Movies