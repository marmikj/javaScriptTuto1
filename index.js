//Data Types
//numbers
var num = 66;
var num1 = 77;
//console.log(num+num1)

//string
var str1 = "hello";
var str2 = "world";
//console.log(str1+str2);
//object
var marks = {
  ravi: 39,
  meet: 49,
};
console.log(marks);
//boolean
var a = "true";
var b = "false";
// console.log(a,b);

//undefine
var und;
// console.log(und);
//array
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);

//operators

//Arithmetic
var a = 66;
var b = 77;
// console.log("the value a valuse b ",a+b);
// console.log("the value a valuse b ",a-b);
// console.log("the value a valuse b ",a*b);
// console.log("the value a valuse b ",a/b);

//assignment

var c = b;
// console.log(c);

//comaprision
var a = 44;
var b = 55;
// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a<b);

//logical

// console.log(true && true)

// console.log(true && false)
// console.log(false && true)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)

// console.log(!false)
// console.log(!true)

//Function of javascript

// function avg(a, b) {
//   return (a + b) / 2;
// }
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// //conditional javascript

// var age = 9;
// if(age>8)
// {
//     console.log("You Are Not kid ");
// }
// else{
//     console.log("You Are Kid");
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr)
// for(var i=0;i<arr.length;i++)

// {
//     console.log(arr[i]);
// }
// arr.forEach(element => {
//     console.log(element);
// });

// const ac=20
// ac++;

// let j = 0;

// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     // break;
//     continue;
//   }
//   console.log(arr[i]);
// }

// var str1 = "this is a string";
// var str2 = "this is a string";
// console.log(str1, str2);


// function avg (a,b) {
//   return (a+b)/2;
// }

// console.log(avg(4,6));



// //array of method 
// let arr=["joshi",23,56,"marmik",null,true]
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push("abc")

// console.log(arr);
// arr.shift()

// console.log(arr);

// arr.unshift("abc")
// console.log(arr)


//string of method
let str = "marmik is a good good boy"
// console.log(str.length)
// console.log(str.indexOf("a"))
// console.log(str.lastIndexOf("i"))
// console.log(str.slice(0,1))

// console.log(str.toLowerCase())
// console.log(str.includes("Is"))
// console.log(str.toUpperCase())
// console.log(str.slice(2,7))
// d=str.replace("marmik","abc")
// d=d.replaceAll("good","baD")
// console.log(d,str)

// console.log(str.startsWith("Boy"))

// console.log(str.endsWith("boy"))

// console.log(str.search("bOy"))

// console.log(str.match(/good/g))
// let abc= "   marmik    "
// console.log(abc.trim())

console.log(str.charAt(12))


str2="abc"

var a=str2.concat(str)
console.log(a);




b=str.repeat(3)
console.log(b)


myDate= new Date()

console.log(myDate.getTime())

// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())

// let elem=document.getElementById('Click')
// console.log(elem)

// let elemClass=document.getElementsByClassName('container')
// // console.log(elemClass)
// // elemClass[0].style.bacground="yellow";
// elemClass[0].classList.remove('bg-primary')
// elemClass[0].classList.remove('text-success')

tn= document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText="this was created";
tn[0].appendChild(createdElement);


createdElement2 = document.createElement('b');
createdElement2.innerText="this was created bold";
tn[0].replaceChild(createdElement2,createdElement);

// removeChild(createdElement);


//Event in javascript
// window.onload=function() {
//   console.log("document loaded");
// }

// firstContainer.addEventListener('click',function() {
// console.log("clicked")
// })

// firstContainer.addEventListener('mouseover',function() {
// console.log("mouse over")
// })

// firstContainer.addEventListener('mouseout',function() {
// console.log("mouse out")
// })



///json 
obj={
  "name":"Marmik"
}
js=JSON.stringify(obj)
console.log( js)
