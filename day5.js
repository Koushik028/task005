// 1.print odd numbers in an array
// anonymous
var arr=[1,2,3,4,5,6,7,8,9,10]

var oddnum = (function (arr){

    return(arr.filter((item)=>{

        return item % 2 !== 0

    }))
    
})
(arr);

console.log(oddnum);

// IIFE
(function(odd){

    odd.forEach(element => {
     if(element %2!==0)
      console.log (element);
    }); 

})([1,2,3,4,5,6,7,8,9,10]);

//2.Convert all the strings to title caps in a string array
// anonymous

var string= ["I love mercedes benz" ]

var stringarray = (function (string){

    return (string.map((item)=>{

        return item.toUpperCase()

    }))
})
(string);

console.log(stringarray);

// IIFE

(function(s){
    let arr = s.split(' ');
    let arr2 = arr.map(a => a.charAt(0).toUpperCase()+a.substring(1));
    s = arr2.join(' ');
    console.log(s);
})("I love mercedes benz");

// 3.sum of all numbers in array
var add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
 
var arr = [3, 6, 1, 5, 8];
 
var sum = add(arr);
console.log(sum)

// IIFE

(function(nums){
    let sum = nums.reduce((total,next) => { return total + next},0);
    console.log(sum);
})([3, 6, 1, 5, 8]); 

// 4.prime numbers
var newarray = [1, 3, 2, 5, 10];
var prime= newarray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(prime);

 // IIFE
 var prime = (function (arr) {
    array = arr.filter((number) => {
      if (number == 1) {
        return false;
      } else if (number == 2) {
        return true;
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
      }
      return true;
    });
    return array;
  })([1, 3, 2, 5, 10]);
  console.log(prime);

//5.palindromes in an array 
// anonymous
const palidrome =["CIVIC",1551,"level",12345];
var validate=function(palidrome) 
{
  var stringvalue = palidrome.toString();
  let lenstring=stringvalue.length;
  for(var i = 0;i<lenstring/2;i++)
  {
      if(stringvalue.charAt(i)!=stringvalue.charAt(lenstring-i-1))
      {
        return false;
      }   
  }
  return true;
}
console.log(palidrome.filter(validate));

// IIFE
let palindrome = (function (arr) {
    let array = arr.filter((string) => {
      let s = string.toLowerCase();
      let count;
      if (s.length % 2 == 0) {
        count = s.length / 2;
      }
      if (s.length == 1) {
        return true;
      } else {
        count = (s.length - 1) / 2;
      }
      for (let i = 0; i < count; i++) {
        if (s[i] != s[s.length - i - 1]) {
          return false;
        }
      }
      return true;
    });
    return array;
  })(["Civic", "dewars", "radar", "Level", "jimbeam"]);
  console.log(palindrome);


// 6.Return median of two sorted arrays of the same size

  //anonymous function
var arr = [1,2,3,4,5]
var arr1 = [6,7,8,9,10];
var median;
var result = arr.concat(arr1)
var n = result.length;
if(n%2===0)
{
median = (( result[n/2]) + result[n/2+1] )/2;
}
else
{
median = (result[n/2])/2;
}
console.log(median); 

// IFFE
(function(arr,arr1)
{
var median;
var result=arr.concat(arr1)
var n=result.length;
if(n%2===0)
{
median=((result[n/2])+result[n/2+1])/2;
}
else
{
median=(result[n/2])/2;
}
console.log(median);
})([1,2,3,4,5],[6,7,8,9,10]);
  
//7. Remove duplicates from an array.

//anonymous function
var arr=[1,2,3,4,5,5,4,3,2,1,7,8,9,10]
let res=function(arr){
    let obj = {};
    let a = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj)
            continue;
        else{
            obj[arr[i]] = i;
            a.push(arr[i]);
        }
    }
    console.log(a);
};
res(arr);

//IIFE
(function(arr){
    let obj = {};
    let a = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj)
            continue;
        else{
            obj[arr[i]] = i;
            a.push(arr[i]);
        }
    }
    console.log(a);
})([1,2,3,4,5,5,4,3,2,1,7,8,9,10]);

// 8.Rotate an array by k times

// anonymous function
var arr=[1,2,3,4,5];
var rotate=function(arr, k)
{
for(let i=1;i<=k;i++)
{
arr.push(arr.shift());
 
}
return arr;
}
var result=rotate(arr,3);
console.log(result);

// IIFE
(function(arr,k){
    for(let i=1;i<=k;i++)
{
arr.push(arr.shift());
}
console.log(arr);
})([1,2,3,4,5],3);

// ARROW FUNCTION

// 1.print odd numbers in an array
let getarray = [1,2,3,4,5,6,7,8,9,10];
let odd = getarray.filter((number) => number % 2 != 0)
console.log(odd);

// 2.convert all the strings into title caps in a string array
let array1 = ["jagermeister","ballentine","jack daniels","johnnie walker","jimbeam"];
let Titlecase = array1.map((string) => string.charAt(0).toUpperCase() + string.substring(1).toLowerCase());
console.log(Titlecase);

// 3.sum of all numbers in an array
let array2 = [1,2,3,4,5,6,7,8,9];
let sum = array2.reduce((total, number) => total += number,0); 
console.log(sum);

// 4.return all the prime numbers in an array
let array3 = [1,2,3,4,5,6,7,8,9,10];
let isPrime = (num) =>{
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  console.log(array3.filter(isPrime));

//   5.return all the palindromes in an array
const array =["civic", "dewars", "radar", "level", "jimbeam"];

var palindrom =(array) =>
{
  var stringvalue = array.toString();
  let string = stringvalue.length;
  for(var i = 0;i<string/2;i++)
  {
      if(stringvalue.charAt(i)!=stringvalue.charAt(string-i-1))
      {
        return false;
      }   
  }
  return true;
}
console.log(array.filter(palindrom));
