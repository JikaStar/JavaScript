try{
    console.log("Hello");
    console.log(sayHello());
    console.log("This is an error");
}
catch(err){
    console.log("Description " + err.description);
    console.log("Message "+ err.message);
    console.log("Stack trace:"+ err.stack);
}
//finally{
//  console.log("This line is guaranteed to execute");  
//}
////try catch finally
//
//function f(){
//    try{
//        console.log(0);
//        console.log(name2);
//    }catch(e){
//        console.log(1);
//        return true;
//        console.log(2);
//    }finally{
//        console.log(3);
//        return false;
//        console.log(4);
//    }
//    console.log(5);
//}
//console.log(f());