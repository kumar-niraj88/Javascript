

let arr =[1,4,30,20,90,"hello",true,"hi",4];
// console.log(arr);

//two know the length of the array
console.log(arr.length)  // 9  -> its a property not method


// Array method

// 1.push()

console.log(arr.push(400)) ;//8 //add the last element  and return  the modifide length of array  

//2.pop()

console.log(arr.pop()); //hi // return the last element and remove that element from the last

//3.unshift()

arr.unshift(11);
console.log(arr.unshift(123))  //10 //add the first and return the modifide length of array 
console.log(arr);

//4.shift()
arr.shift()
// console.log(arr);

// 5.includes()

// check wether the element is present or not to secific array
console.log(arr.includes(123)) //true


// 6.indexof()

console.log(arr.indexOf(4));  //return the indx of the paticular ele 

// 7.lastIndexOf()

console.log(arr.lastIndexOf(4)) //return the indx of the paticular ele  from the last

//8.concat()
let arr2=[20,25]
let combin= arr.concat(arr2)
console.log(combin)

//9.join()
let arr3=['h','e','l','l','o']
let str = arr3.join("")
console.log(str)

//10.reverse()
let revarr = arr3.reverse()
console.log(revarr)
 
 // revsere string using in-build method
let str1 = "hello"
let conarr = str1.split("")
let revarr1 = conarr.reverse()

let revstr = revarr1.join("")
console.log(revstr)

//in a sinlge line 

let ans = str1.split("").reverse().join("")
console.log(ans)

//11.slice()

let arr4 = [10,20,30,40,50]
let slicedArr = arr4.slice(1,4)
console.log(slicedArr)  // [20, 30, 40]
console.log(arr4)  // [10,20,30,40,50]

// 12.splice()

arr4.splice(2,2);   // splice(2 -> where to start , 2 -> how many element to delet (0,1))
console.log(arr4)  // [10, 20, 50]  


let arr5 = [10,20,30,40,50]

arr5.splice(2,0,"hello")
console.log(arr5) //[10, 20, 'hello', 30, 40, 50]

//13.Array.isArray()
let names = "niraj"
console.log(Array.isArray(names))  //f
console.log(Array.isArray(arr5))  // t


// 14. flat()

let arr61  =  [10,20,30,[40,50,60,[70,80,[90,100,[101]]]]]

//simplyfy the nested array

// let ans1= arr6.flat(1)
// console.log(ans1)   [10, 20, 30, 40, 50, 60, Array(3)]

let ans2= arr61.flat(3)
console.log(ans2)  //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, Array(1)]


let ans3= arr61.flat(Infinity)
console.log(ans3)  //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101]


// higer order  method in array

let brr =[10,20,40,60,80];
brr.forEach((ele ,idx  , arr) => {  // its take three as argument (element , index ,  arrays)
    console.log(ele ,idx ,arr);
})

// forEach() method is not return anythings

//store the value in arrays which is greter than 40

let brr1= [10,20,40,30,50,70,80];
let brr2=[]

brr1.forEach((ele) =>{
    if(ele>40){
        brr2.push(ele)
    }
});

console.log(brr2)   //[50, 70, 80]


//  filter

// let newArr = brr1.filter((ele) => {
//     return ele > 40;
// })

// console.log(newArr)   [50, 70, 80]

// in one line

let newArr = brr1.filter((ele) => ele>40)

console.log(newArr)  // [50, 70, 80]


let newArr2 = [];
brr1.forEach((ele) => {
    newArr2.push(ele+100);
})

console.log(newArr2)  //[110, 120, 140, 130, 150, 170, 180]


//map

let maparr = brr1.map((ele) => {
    return ele +100
})

console.log(maparr)  //[110, 120, 140, 130, 150, 170, 180]


// sum of all brr1
let sumarr =0;
brr1.map((ele) => {
     sumarr= sumarr+ ele;
})

console.log(sumarr); // 300

// reduce

let add = brr1.reduce((acc,ele) => {
    return acc +ele;
},0)

console.log(add)  // 300

let add1 = brr1.reduce((acc,ele) => {
    return acc +ele;
}, 200)

console.log(add1)  // 500

// find the element which are grater than 40 , add the 100 in them and add the all the element 


let brr11= [10, 20,30,4,0,50,60,70,80,90]
let allsum = brr11.filter((ele) => ele >40)

let allsum1 = allsum.map((ele) => {
    return ele+100;
})

let allsum2 = allsum1.reduce((acc,ele)=> acc + ele)
console.log(allsum2)


let ans1 = brr11.filter((ele) =>ele >40 ).map((ele)=> ele+100).reduce((acc,ele)=> acc+ele)

console.log(ans1);



