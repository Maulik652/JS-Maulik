// DataType in js 

/* primitive data type 
1 string
2 number
3 Boolean
4 null
5 BigInt
6 Symbol
7 undefined
*/

/* Object Data Type

1 Object
2 Array
3 Date
*/  
// console.log('welcome to the java course');

// var my_Age = 33;
// console.log(my_Age);

// var a=10 , b=20;

// function sum(a,b)
// {
//     return  a*b;
// }
// console.log(sum(5,5));
// console.log(sum(5,122));


// function demo()
// {
//     console.log('welcome to the maulik echofdo');
// }
// demo();


// 



// function sum(a,b) {

//     return a+b;
    
// }

// var result = sum(10,20);
// // sum is store result variable name 
// console.log("the sum of two number is "+ result);

// asychronous function
// const fun2 = () =>
// {
//     setTimeout(() =>{
//         console.log("fun2 start,End");
        
//     },2000);
// }


// const fun1 =() =>
// {
//     console.log("fun1 is start");
//     fun2();
//     console.log("fun1 is End");

// }

// fun1();




// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }

// const arr = [3,2,1];
// arr.sort();
// arr.reverse();
// console.log(arr);

// let arr = ["BMW","AUDI","SKODA","MAHINDRA"];
// arr.sort();
//  arr.reverse()
// console.log(arr);


// template String 

// let firstName = "hello";
// let lastName = "sarena";
// let age = "20";
// const fullName = `${firstName} ${lastName} ${age}`;
// console.log(fullName);


// const sum   = (a,b) =>
// {
//    let result = `the sum of ${a} and ${b} is ${a+b}`;
//    console.log(result);
// }
// sum(10,20);

// function mySubmit()
// {
//       let UserName= document.getElementById("Uname").value;
//       let  passs=document.getElementById("password").value;
//    if(UserName=="")
//    {
//       document.getElementById("error").innerHTML="please enter your name";
//       // alert('please enter your name');
//       return false;
//    }
//    else if(passs=="")
//    {
//       document.getElementById("error1").innerHTML="please enter Storng  password";
//       return false;
//    }
//    else{
//       alert(`your name is ${UserName}  and  your  password is ${passs}`);
      
//    }
// }


   // object 

   // dynamic create object

   // let idType="studentId";

   // let preson =
   // {
   //    [idType]:"A123456",
   //    Sname:"maulik",
   //    Sage:19,
   //    greet:function()     
   //    {
   //       console.log(`hey,my ${idType} is ${preson[idType]} my name is ${preson.Sname}`);
   //    }
   // }

   // preson.greet();

   // Diffrent between let and const

   //you can reassigned value of let but you can`t reassigned const value 

   // let myName="sarena";
   // myName="maulik";
   // console.log(myName);

   // const myName="sarena";
   // myName="maulik";
   // console.log(myName);
   

   // add & modify object /\
   let preson=
   {
      name:"maulik",
      age:20,
      isStudent:"true",
      gerrt : function()
      {
         console.log("welcome to the maulik era");
      }

   }

  //---> add new key and pair value ------>
   //preson.job="IT field";
  //console.log(preson);
   //preson.age=19;
   //console.log(preson);

   preson.gerrt();
  
   

//_______________________________________

//-----passing by values-----//

//_____________________________________
   // let a=10;

   // let modiFyvalue=(x) =>(x=20);

   // console.log(modiFyvalue(a));
   // console.log(a);

   // how work java script 

   // first our js Code 
   //parsh phase ..1 lexical phase 2.. syntax phase
   //compilation (JIT compiler )  use just in time compiler to convert js code into machine code 
   //execution phase (1.Creation phase 2.. Execution Contexts)
   //1..Creation phase Hosting and Scope chain are created here and also heap memory
   //final output


   let one = "hello world!";

   let finall = atob(one);
   console.log(finall);