let obj ={
    sanme:"rohit",
    age: 12,
    ispalyer:false,
    ph:3265303626
}

console.log(obj)


// JSON Method

// 1  JSON.stringify()  --> it convert into obj into JSON (Strin)

let jsondata = JSON.stringify(obj)
console.log(jsondata)


// 2  JSON.parse()     --> json into obj

let  newobj = JSON.parse(jsondata)
console.log(newobj)   