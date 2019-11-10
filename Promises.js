//let promiseToCleanTheRoom = new Promise(function(resolve,reject){
//    let isClean = false;
//    if(isClean){
//        resolve("Clean");
//    }else{
//        reject("Not Clean");
//    }
//})
//
//promiseToCleanTheRoom.then(function(fromResolve){
//    console.log(" the room is "+ fromResolve)
//}).catch(function(fromReject){
//    console.log("the room is "+ fromReject);
//})

//let cleanRoom = function(){
//    return new Promise(function(resolve,reject){
//        resolve("Cleaned the room");
//    })
//}
//let removeGarbage = function(msg){
//    return new Promise(function(resolve,reject){
//        resolve( msg +" Removed Garbage");
//    })
//}
//let winIceCream = function(msg){
//    return new Promise(function(resolve,reject){
//        resolve(msg +" Won icecream");
//    })
//}
//cleanRoom().then(function(result){
//    return removeGarbage;
//}).then(function(result){
//    return winIceCream;
//}).then(function(result){
//    console.log("finished" + result);
//})


//const asynch = () =>{
//    return new Promise((resolve, reject) =>{
//        resolve("Everything is good");
//    })
//};
//
//asynch()
//   .then((data) =>{
//    console.log(data);
//    return 1;
//}).then((data)=>{
//    console.log(data);
//    return 2;
//}).then((data)=>{
//    console.log(data);
//})

//const asynch = () =>{
//    return new Promise((resolve, reject) =>{
//        if(number == 4){}
//        
//        resolve("Everything is good");
//    })
//};
//
//asynch()
//   .then((data) =>{
//    console.log(data);
//    return 1;
//}).then((data)=>{
//    console.log(data);
//    return 2;
//}).then((data)=>{
//    console.log(data);
//})

//Async/Await
//function doubleAfter2Seconds(x){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            resolve(x*2);
//        },2000)
//    })
//}

//doubleAfter2Seconds(10).then((r)=>{
//    console.log(r);
//})
//
//let sum = doubleAfter2Seconds(10)+doubleAfter2Seconds(20)+doubleAfter2Seconds(30);
//console.log(sum);


//Promise chain
//function addPromise(x){
//    return new Promise(resolve=>{
//        doubleAfter2Seconds(10).then((a)=>{
//            doubleAfter2Seconds(20).then((b)=>{
//                doubleAfter2Seconds(30).then((c)=>{
//                    resolve(x+a+b+c);
//                })
//            })
//        })
//    })
//}
//
//addPromise(10).then((sum)=>{
//    console.log(sum);
//})


function doubleAfter2Seconds(x){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(x*2);
        },2000)
    })
}
 async function addAsync(x){
     const a = await doubleAfter2Seconds(10);
     const b = await doubleAfter2Seconds(20);
     const c = await doubleAfter2Seconds(30);
     return x+a+b+c;
     
 }

addAsync(10).then((sum)=>{
    console.log(sum);
})








