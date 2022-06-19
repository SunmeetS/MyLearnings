function car (Name,Model,Color){
    this.name = Name;
    this.model = Model;
    this.color = Color

    this.test = function(){
        console.log(`I am driving a ${this.model}`)
    }
}

let car1 = new car('Maruti','Ritz','Brown');
console.log(car1);
car1.test();

let car2 = new car('Mercedes','S class','Red')
console.log(car2);