console.log("hello world");

let arr = ["abc","def","wer","xyz"];
let arra2=[5,7,12,"kkk"]

console.log(arr.length);
result=arra2.concat(arr);
console.log(result,"concat");

abc=arr.copyWithin(2)
aa=arr.entries()
console.log(arr)
console.log(abc);


var ages=[12,33,,56,6.9]
// every()
console.log(ages.length);
function checkAge(age) {
    if(age>=18){
        return true;
    }
    return false;
}

result=ages.every(checkAge)
console.log(result,"every")

//flat 

car=["acb","acd","cd",["xy",["xyz"],"yuyu"],"bbc"];
ca1=car.flat(Infinity)
console.log(ca1,"flat")

//faltmap
bikes=["passion","splender","hero honda"]
bike=bikes.flatMap((el)=>{
    return el.split(" ")

})
console.log(bike,"flatmap")


//fill
laptops=["HP","Lenovo","Dell"]
laptops.fill("Asus",1,2)
let str=['12345']

//from
result=Array.from("javascript");
console.log(result,"from")

//filter 
let  number =[1,2,3,4,5,6,7]

result=number.filter((el)=>{
    return el%2==0
})
console.log(result,"filter")

// find
// let num =[23,34,5,6,7,8];
// result1= num.find((el)=>{
//         return el==23
    

// })
// console.log(num,"find")
 
//foreach
let acb=["marmik","joshi",11]
result=acb.includes(10)

// acb.forEach(function (value){
//     return (value)
// })
console.log(result,"")


//includes

//isArray
// let a ="marmik"
// if(Array.isArray(a)==true)
// {
//     console.log("this is Array ")
// }
// else
// {
//     console.log("This is not an array")
// }

//join 
let company =["abc","bbc","dfgd","fds","ghf","sdfg","dfgd"]
// company.pop()
// company.push("haha")
// company.reverse()
// console.log(company)

// cmp1=company.lastIndexOf("dfvgd")
// cmp2=company.indexOf("abC")
// console.log(cmp1);
// console.log(cmp2);

// //map 
// array =[2,5,6,7 ,"abc"]
// array12=array.map((array)=>{
//     return array*2
// })
// console.log(array12);

//reduce

// const bbc =[23,45,6,7,8]
// const response=bbc.reduce((prev,curr)=>{
//     return prev+curr
// })
// console.log(response)

//reduce right 

const bbc1 =[23,45,6,7,13]
const response1=bbc1.reduceRight((prev,curr)=>{
    return prev+curr
})
console.log(response1)

//some



const xyz=[88,76,454,667,88]
const l2=xyz.some((lbl)=>{
    return lbl>=900 
})
console.log(l2);

//shift 



const bbc2 =[23,45,6,7,13]
const srs=["a","b","c","d","e","f"]
// bbc2.shift();
// bbc2.sort();
// bbc2.splice(2,0,2)
bbc2.toString()
// bbc3=bbc2.toLocaleString()
// console.log(bbc2)
// console.log(bbc3)

bbc2.values()
// bbc2.unshift("bb")
console.log(bbc2)

//------String ----------

//charAt
const a="This is a javascript"
b=a.charAt(10);
console.log(b,"CharAt")

//charCodeAt

const a1="  This is a javascript  "
const a2="WELCOME"
b3=a1.indexOf("iS")
b4=a2.lastIndexOf("o")
b2=a1.concat(a2)
b5=a1.search("javascript");
b6=a1.match(/I/gi)
b7=a1.matchAll(/t/gi)
b8=a1.replace("javascript","PHP")
b9=a1.substr(2)
b10=a1.substring(2,9)
b11=a1.slice(1,5)
b12=a2.toLowerCase()
b13=a1.toUpperCase()
const laa=50
b14=laa.toString()
b15=a1.valueOf()
b16=a1.split("i")


b1=a1.charCodeAt(10);
 console.log(b1,"charCodeAt")
 console.log(b2,"concat")
 console.log(b3,"indexof");
 console.log(b4,"Lastindexof");
 console.log(b5,"search");
 console.log(b6,"match")
 console.log(b7,"matchAll")
 console.log(b8,"replace")
 console.log(b9,"substr")
 console.log(b10,"subString")
 console.log(b11,"slice")
console.log(b12,"lowercase")
console.log(b13,"uppercase")
console.log(b14,"toString")
console.log(b15,"valueOf")
 console.log(b16,"split")
let abab="   sdvdvss  "
bccc=abab.trim()
 alert(bccc)


//finite
let r=isFinite(123)
console.log(r,"finite") 

let g= Number.isInteger(123)

console.log(g,"integer")

let h=parseFloat("123")
console.log(h,"float")

let i=parseInt("123")

console.log(i,"parseInt")

let j=parseFloat("24161781")

console.log(j,"parseFloat")

let num =51.524612
let n1=num.toFixed()
let n = num.toExponential();
let n2=num.toPrecision();
console.log(n,"toExponential")
console.log(n1,"fixed")
console.log(n2,"precision")



var clg=['John','Serious','Hadrik','Harry'];  
var itr=clg.entries();

for(x of itr)  
{  
    document.write("<br>"+x); //This will display one array element per line with its key.   
}  

console.log(itr,"entries")