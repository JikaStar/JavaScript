//Find Greater number
function calculateGreater(){
    var num1 = parseInt(prompt("Enter your num1"));
    var num2 = parseInt(prompt("Enter your num2"));
    
    if(num1>num2){
        console.log("Num1 is greater");
    }else{
        console.log("Num2 is greater");
    }
}

//console.log(calculateGreater());

//Print array in reverse
var a=["start","hello","world",4,3,1,"goodbye",2,5,"end"];
 for(var j=a.length-1;j>=0;j--){
  // console.log(a[j]);
 }

//1)print string in reverse
var str = "CapitalOne"; //string literal declaration
 for(var i=str.length-1; i>=0;i--){
    // console.log(str[i]);
     function revStr(str){
         var newStr = "";
         for(var i=str.length-1; i>=0; i--){
             newStr+=str[i];
         }
         return newStr;
     }
 }
//console.log(revStr("CapitalOne"));

//2) Chaining the three methods together
//The split() method splits a String object into an array of string by separating the string into sub strings.
//The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//The join() method joins all elements of an array into a string.
function revStr(str){
    return str.split("").reverse().join("");
}
//console.log(revStr("CapitalOne"));

//Factorialize a Number With Recursion
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);

//Check for Palindromes With Built-In Functions
//For this solution, we will use several methods:
//
//The toLowerCase() method to return the calling string value converted to lowercase.
//The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.
//The split() method splits a String object into an array of strings by separating the string into sub strings.
//The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//The join() method joins all elements of an array into a string.

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
//console.log(palindrome("A man, a plan, a canal. Panama"));


//Check a number is prime or not
function testPrimeNum(n){
    if(n===1){
        return false;
    }else if(n===2){
        return true;
    }else{
        for(var i=2; i<n;i++){
            if(n%i===0){
                return false;
            }
        }
        return true;
    }
}
//console.log(testPrimeNum(37));

//Check a number is prime
function testPrimeNum(num){
    for(var i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
        return num>1;
    }
}
console.log(testPrimeNum(37));














