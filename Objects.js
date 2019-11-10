/*var car1 ={
    make:"Toyota",
    model:"Camry",
    year:2018,
    color:"grey",
    engine:2.5
}

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);

console.log(car1["make"]);
console.log(car1["color"]);
console.log(car1["model"]);


var car2 = new Object();
car2.make="Honda";
car2.model="Civic";
car2.year=2017;
 

console.log(car2);

car2.color="white";  //Update
delete car2.model;   //delete  //
car1.turbo=true;     //adding new property   */

//var car3={
//    make:"audi",
//    model:"A7",
//    engine:{
//        cylender:4,
//        size:"3.0",
//        turbo:true
//    },
//    hp:[350,400,550]
//};
//
//
//console.log(car3.engine.size);

//var car4={
//    make:"Toyota",
//    model:"Camry",
//    mileage:2000,
//    year:2018,
//    color:"grey",
//    engine:2.5
//};
//function checkCar(car){
//    if(car.mileage<=20000 && car.year>=2013){
//        return true;
//    }else{
//        return false;
//    }
//}
//
//console.log(checkCar(car4));


//var car={
//    make:"Toyota",
//    model:"Camry",
//    mileage:2000,
//    year:2018,
//    color:"grey",
//    engine:2.5,
//    started:false,
//    start:function(){
//        this.started=true;
//    },
//    stop:function(){
//        this.started=false;
//    },
//    drive:function(){
//        if(this.sarted){
//            console.log("Engine is on,ready to drive")
//        }else{
//            console.log("you need to start the engine first")
//        }
//        
//    }
//    
//};
//
//car.drive();
//car.start();

//var car={
//    make:"Toyota",
//    model:"Camry",
//    mileage:2000,
//    year:2018,
//    color:"grey",
//    engine:2.5,
//    started:false
//};
//for(x in car){
//    console.log(car[x]);//to see the values
//    console.log(x + ":" +car[x]);
//}
 function Car(make,model,year,color,engine,hp,started){
     this.make=make;
     this.mode=model;
     this.year=year;
     this.color=color;
     this.engine= engine;
     this.hp=hp;
     this.started=started;
     this.start=function(){
         this.started=true;
     },
         this.stop=function(){
         this.started=false;
     },
         this.drive=function(){
         if(this.started){
             return "Engine is on, lets drive"
         }else{
             return "you need to start engine first"
         }
     }
 }
//create objects from function constructor

var bmw = new Car("Bmw","M6",2018,{cylinder:5,size:3.3,turbo:true},[300,400],false);
var mersedes = new Car("Mers","K6",2018,{cylinder:8,size:4.3,turbo:true},[700,900],false);

function Bus(make,model,year,capacity,currentPassengerNum){
    this.make=make;
    this.model=model;
    this.year=year;
    this.capacity=capacity;
    this.currentPassengerNum=currentPassengerNum;
    this.availableSeat=function(){
        return this.capacity-this.currentPassengerNum;
    }
}



//console.log(Car.prototype==bmw.__proto__);
//adding property with object
//bmw.__proto__.test="test123";



//adding property from constructor
Car.prototype.maxSpeed=250;
//console.log(Car.prototype);


//console.log(mersedes.test);
//mersede.__proto__.test="123";
//console.log(bmw.test);


var obj1 = {};
var obj2 = new Object();
 
//console.log(obj2.__proto__==mersedes.__proto__.__proto__);
//console.log(obj2._proto__==bmw.__proto__.__proto);
//console.log(obj2.__proto__==Car.prototype.__proto__);

//.__proto__.power="300hp";
//console.log(mersedes.power);
//bmw.__proto__.__proto__.objmethod=function(){
//    console.log("I am an object");
//};
//obj2.objmethod();
//mersedes.objmethod();
//Car.objmethod();
//Object.objmethod();
//
//console.log(bmw.__proto__.__proto__.__proto__);
//console.log(obj2.__proto__.__proto__);
//console.log(Object.prototype.__proto__);


///////////////////////////////////////////////////////
function Hotel(name,rooms,booked){
    this.name=name;
    this.rooms=r
}
















