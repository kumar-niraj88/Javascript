
// declaration of string 

//1.by using literals

let str="hello";
let str1='hello';
let str2=`Hello`;




//2. by using objects

let strobj = new  String("hello")
let strobj2 = new  String("hello")

console.log(str);
console.log(strobj);

console.log(str == str1);  //true
console.log(str == str2);  //false

console.log(strobj2 == strobj)  //false 


//String method

//how to know length of string

console.log(str1.length)  //5

//1.toUpperCase()

let str4="hello";

let upper=str4.toUpperCase();

console.log(str4);   // hello
console.log(upper)   // HELLO

//conclusion buz toUpperCase() is return a new String there will not change original string



//2.toLowwerCase()


let str5="HELLO";
let lowwer = str5.toLowerCase();
console.log(str5)     // HELLO
console.log(lowwer)   // hello


//3.charAt()

let str6 = "apple is good one apple";
console.log(str6.charAt(2));  //p

//4.indexof

console.log(str6.indexOf('l'))   //3

//5.lastindexOf()

console.log(str6.lastIndexOf('l'))  //21

//6.concat()

let str7= 'hello'
let str8 = 'how are you';

let combine = str7.concat(" ",str8,"  niraj")
console.log(combine)


//7.trim()  

let str9 = "  hi   ";
console.log(str9.length)  //7


console.log(str9.trim());        //hi
console.log(str9.trim().length)   //2

//8.trimStart()


let space = "     good      ";

console.log(space.trimStart())  //remove the space from the first

  //9.trimEnd();
console.log(space.trimEnd());   // remove the space from the last
console.log(space.trimEnd().length)   //9


//10.includes()

let str10 = "how are you";
console.log(str10.includes('how'));   //true
