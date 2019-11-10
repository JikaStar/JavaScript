//call
//var person1 = {firstName: 'Jon',lastName: 'Kuperman'};
//var person2 = {firstName: 'Kelly', lastName: 'King'};
//
//function say(greeting){
//    console.log(greeting +" "+ this.firstName+ " "+ this.lastName);
//}
//say.call(person1, 'Hello');
//say.call(person2, 'Hi');

//apply
//var person1 = {firstName: 'Jon',lastName: 'Kuperman'};
//var person2 = {firstName: 'Kelly', lastName: 'King'};
//
//function say(greeting){
//    console.log(greeting +" "+ this.firstName+ " "+ this.lastName);
//}
//say.apply(person1, ['Hello']);
//say.apply(person2, ['Hi']);

//bind
var person1 = {firstName: 'Jon',lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(){
    console.log("Hello  "+ this.firstName+ " "+ this.lastName);
}
var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon();
sayHelloKelly();