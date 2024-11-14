


let multiply = (a,b) =>{
    // console.log(a*b);
    return a*b;
}
let ans=multiply(40,10);
console.log(ans);

//3.Arrow function
let div = () =>{

}

div()//calling the fun


// let add = (a,b) =>{
//     return a+b;
// }


let add = (a,b) => a + b;


let val =add(10,20);
console.log(val)



//prime number or not using function

let num=31;
let count=0;

let isPrime =(num) => {
    for(let i=2;i<num;i++){
        if(num%i==0){
            console.log("not a prime number");
            count=1;
            break;
        }
    }
    if(count==0)
    console.log("prime number");
}

isPrime(num);


// 4. Nested Function
// lexical scoping 

let outer = () => {
    let a=80;
    let inner = () =>{
        let b = 30;
        console.log("the add",+a+b)
    }
    inner()
} 

outer()



// HigerOrder and Callback function...

let hi =() =>{
    console.log("hi i'm hi function")
}

let hello = (a,b,c)=>{
    console.log(a)
    console.log(b)
  
    console.log("hi i'm hello function");
    c()
}

hello(41,"niraj",hi)
hello(52, "msd",()=>{
    console.log("hello i'm call back fun");
 });
//directly we c pass the fun
// callback fun = any fun which was sending as a parameter is called callback fun


// 7.IIFE => using for one time excution


(function (){
    console.log("hi bhai ")
})();   //if two IIFE fun r there so previous fun must used semicolne(;) if not error





(() =>{
    console.log("i'm life");
})()