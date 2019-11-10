function Car(make,model,year,color,engine,hp,started){
     this.make=make;
     this.model=model;
     this.year=year;
     this.color=color;
     this.engine= engine;
     this.hp=hp;
     this.started=started;
     
 };
//create objects from function constructor

var bmw = new Car("Bmw","M6",2018,{cylinder:5,size:3.3,turbo:true},[300,400],false);
var mersedes = new Car("Mers","K6",2018,{cylinder:8,size:4.3,turbo:true},[700,900],false);

Car.prototype.start=function(){
    return this.starter=true;
};
Car.prototype.stop=function(){
    return this.started=false;
};
Car.prototype.drive=function(){
    if(this.started){
             return "Engine is on, lets drive"
         }else{
             return "you need to start engine first"
         };
};


Car.prototype.test="test123";
bmw.__proto__.printWholeBrand=function(){
    console.log(this.make+" "+this.model);
    
};
Car.prototype.showPower=function(){
    return this.hp[1]*10;
};
bmw.printWholeBrand();
mersedes.printWholeBrand();

console.log(bmw.showPower());
console.log(mersedes.showPower());



//BUS
function Bus(make,model,year,started,capacity,currentPassengerNum){
    this.make=make;
    this.model=model;
    this.year=year;
    this.started=started;
     this.capacity=capacity;
    this.currentPassengerNum=currentPassengerNum;
    this.availableSeat=function(){
        return this.capacity-this.currentPassengerNum;
    };

    //Connecting prototypes
    Bus.prototype=Car.prototype;

var volvo = new Bus("Volvo","B11",2011,54,20);

//volvo.__proto__.firstDoor="Closed";
//
//console.log(volvo.__proto__);
    volvo.start();
    console.log(volvo.drive());










    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    