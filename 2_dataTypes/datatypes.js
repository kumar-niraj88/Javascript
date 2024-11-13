console.log("datatypes in js");

// Primitive Data types

    // Number DataTypes
    // boolean
    // String
    // bigInt
    // undefined
    // null

// Not primitive Data Types

    // 1.Arrays
    // 2.Function 
    // 3.Object


// Number DataTypes

    let a=20;
    let b=20.9;
    console.log(a);
    console.log(b);

//   typesof operator is used to check to types os operator 
    console.log(typeof a)  // number


// boolean DataTypes

    let isPlay=true;  
    console.log(typeof isPlay)  //boolean



// String DataTypes


    let names="Niraj kumar";
    console.log(names)
    console.log(typeof names)  //String 


// bigInt Datatypes


    let  num=49n;
    let num1=BigInt(452);
    console.log(num1)      //452n
    console.log(typeof num1)//bigint
    console.log(typeof num) //bigint 



// Undefined DataTypes


    let un;

    console.log(typeof un);  // undefined


// null datatypes 


    let nu=null;
    console.log(typeof nu);  //object

//




//****************************** *//

// Non primitive datatypes


    //arrays

    let arr=[1 ,'niraj',undefined,null,['kumar','niraj']];

    console.log(arr)


    // function 

    function add(){
        console.log("this is a add function");
    }

    add()//fun call

    console.log( "types of fun: ",typeof add)  //function



    // objects
    
    let student ={
        sname :"niraj",
        sid: 1,
        sage:12
    }

    console.log(student);
    console.log("type of object : ",typeof student)  //object









    