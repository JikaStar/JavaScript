//synchronous
//function first(){
//      console.log("first one")  
//    
//}
//function second(){
//    console.log("second one");
//}
//function third(){
//    console.log("third one");
//}
//
//first();
//second();
//third();

//asynchonous

//function first(){
//    setTimeout(function(){
//      console.log("first one")  
//    },1000)
//}
//function second(){
//    console.log("second one");
//}
//function third(){
//    console.log("third one");
//}
//
//first();
//second();
//third();

//how to handle async ? With callback function
function first(callback){
    setTimeout(function(){
      console.log("first one") 
      callback(third);    //second(third);
    },1000)
}
function second(callback){
    console.log("second one");
    callback(); //third();
}
function third(){
    console.log("third one");
}

first(second);
//second();
//third();









