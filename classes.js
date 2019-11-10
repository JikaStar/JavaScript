//ES5
//var Person5 = function(name,yearOfBirth,job){
//    this.name=name;
//    this.yearOfBirth=yearOfBirth;
//    this.job=job;
//}
//Person5.prototype.calculateAge=function(){
//    var age= new Date().getFullYear()-this.yearOfBirth;
//    console.log(age);
//}
//var mike5 = new Person5("mike",1980,"tester");
//mike5.calculateAge();

//ES6
// class Person6{
//     constructor(name,yearOfBirth,job){
//         this.name=name;
//         this.yearOfBirth=yearOfBirth;
//         this.job=job;
//     }
//     calculateAge(){
//         var age= new Date().getFullYear()-this.yearOfBirth;
//         console.log(age);
//     }
//     
//     
// }
//let mike6 = new Person6("mike",1980,"tester");
//mike6.calculateAge();

//Static method

// class Person6{
//     constructor(name,yearOfBirth,job){
//         this.name=name;
//         this.yearOfBirth=yearOfBirth;
//         this.job=job;
//     }
//     calculateAge(){
//         var age= new Date().getFullYear()-this.yearOfBirth;
//         console.log(age);
//     }
//     static greeting(){
//         console.log("Hello");
//     }
//     
//     
// }
//let mike6 = new Person6("mike",1980,"tester");
//mike6.calculateAge();
//Person6.greeting();

//class Animal{
//     
//    constructor(name){
//        this.name=name;
//        
//    }
//}
//class Dog extends Animal{
//    constructor(name){
//        super(name);
//    }
//    
//}
//let d1=new Dog("abc");
//console.log(d1.name);

//class Person{
//    constructor(name,age,weight){
//        this.name=name;
//        this.age=age;
//        this.weight=weight;
//    }
//    displayName(){
//        console.log(this.name);
//    }
//    displayAge(){
//        console.log(this.age);
//    }
//    displayWeigth(){
//        console.log(this.weight);
//    }
//}
//
//class Programmer extends Person{
//    constructor(name,age,weight,language){
//        super(name,age,weight);
//        this.language=language;
//    }
//    displayLanguage(){
//        console.log(this.language);
//    }
//}
//let mike = new Person("mike",25,120);
//mike.displayName();
//mike.displayAge();
//mike.displayWeigth();
//console.log("..............");
//let john = new Programmer("john",30,150,"js");
//john.displayName();
//john.displayAge();
//john.displayWeigth();
//john.displayLanguage();


//class Vehicle{
//    start(){
//        console.log("starting the vehicle");
//    }
//}
//class Car extends Vehicle{
//    start(){
//        super.start();
//        console.log("starting the car");
//    }
//}
//let honda = new Car();
//honda.start();

//class GetThings{
//    constructor(size){
//        this.length=size;
//    }
//    get Length(){
//        return this.length;
//    }
//    set Length(value){
//        this.length=value;
//        console.log("The value has been set");
//    }
//}
//var thing = new GetThings(9);
//console.log(thing.Length);

//class EncapTest{
//    constructor(name,idNum,age){
//        this.name=name;
//        this.idName=idNum;
//        this.age=age;
//    }
//    get Age(){
//        return this.age;
//    }
//    get Name(){
//        return this.name;
//    }
//    get IdNum(){
//        return this.idName;
//    }
//    set Age(newAge){
//        this.age=newAge;
//    }
//    set Name(newName){
//        this.name=newName;
//    }
//    set IdName(newIdNum){
//        this.idNum=newIdNum;
//    }
//}

//var arr=[[23,45],[34,12,34],[56,00,98]];
//console.log(arr[1][2]); //34
//
//
//var arr1=[
//          [[33,44],[11,22]],
//          [[55,66],[77,88],[111,222]],
//          [[223,333],[555,777],[888,999]]
//         ];
//console.log(arr1[1][2][0]); //111

var x=5;
console.log(x+y);
var y=4;   //NaN







































































































