//DOM
/*
//access the element  from js

// 1.target by the id name
//method Name => document.getElementById()
let para =  document.getElementById("p1");
console.log(para)

// 2 target by the className
//  method => document.getElementsByClassName()

let container = document.getElementsByClassName("container")
console.log(container)

console.log(container[1])

// target by the tag name
// method => document.getElementsByTagName()

let heading1  = document.getElementsByTagName("h1")
console.log(heading1)
console.log(heading1[1])


// selecting bt using selector
// method => document.querySelector()
// the select only the first one -->  we can give id , classname , tag ....
// return --> htmlcollection --> works as array
let con = document.querySelector(".container")
console.log(con)


// 5 selecting by using selectors

// method 
// it will select all the element 
// return --> nodeList  --> array only 
let cons = document.querySelectorAll(".container")
console.log(cons)
*/





//DOM Manipulation

// I want to know what is present inside first container
// Syntax => element.innerText
let firstContainer = document.querySelector(".container")
// console.log(firstContainer)
console.log(firstContainer.innerText)


// changing the button text
let btn1 = document.querySelector(".btn1")
// console.log(btn1)

btn1.innerText = "know about"
// console.log(btn1)
// console.log(btn1.innerText)

// innerHTML
let con3 =document.querySelector(".container3")
con3.innerHTML= `<h>hello bhai</h> 
<br
<p> hey there i'm a added by the js</p>`
console.log(con3)
console.log(con3.innerHTML)  // <h>hello bhai</h>


// how to know what are classes are added
console.log(con3.classList)

// how to add new class 
con3.classList.add("dark");

// how to remove
con3.classList.remove("dark");


// 15/11/24








//create element from js

let div = document.createElement("div");
div.innerHTML = `<h> container from js file </h>`
// adding the className 
div.classList.add("con2")
// adding the background color 
div.style.backgroundColor = "red"
div.style.border = "2px"

// yaha tak bhi display nahi karega buz of secifiy the location
// taget the container to where u r want to display 
let firstCon = document.querySelector(".container")
console.log(firstCon)

// how to display on the UI
firstCon.before(div)



// 

let con4 = document.querySelector(".container4")
// console.log(con4)

let arr = ["html","css","js","java","sql"]  // this is sub arrays

arr.map((sub)=>{
    let li = document.createElement("li")  // creating the ele <li></li>
    li.innerText = sub // assigning the text into the <li></li>
    con4.append(li) // displaying the <li></li> element     
})



