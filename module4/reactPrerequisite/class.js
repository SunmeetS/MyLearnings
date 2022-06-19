class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    welcome(){
        console.log("Hello",this.name);
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}

class Student extends Person{
    constructor (name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}

let Person1 = new Person("Sunmeet",21);
let Student1 = new Student("Sunmeet",21,92)
let Teacher1 = new Teacher("Mohit Behl",26,"Data Structures and Algorithms")
console.log(Person1,Student1,Teacher1)
console.log(Person1.welcome(),Student1.welcome(),Teacher1.welcome());   