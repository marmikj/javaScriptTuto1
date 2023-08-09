const student = {
  a: 4,
  b: 5,
  c: 6,
};

// let student2=Object.assign({c:7}, student);
// console.log(student2.c);

const student3 = Object.create(student);
console.log(student3, "create object");

//define property

const obj1 = {};
Object.defineProperty(obj1, "property1", {
  value: 42,
  value: 52,
  value: 542,
});
obj1.property1 = 177;
console.log(obj1.property1, "define property");

//define properties
const obj2 = {};
Object.defineProperties(obj2, {
  property1: {
    value: 142,
    value: 422,
    value: 423,
  },
  property2: {
    value: 12,
    value: 90,
  },
});
console.log(obj2.property1, obj2.property2, "define properties");

//entries

const car = {
  car1: "abc",
  car2: "bbjh",
  car3: "ooa",
};
console.log(Object.entries(car)[2]);

//freeez

const object1 = {
  property1: 22,
};
const object2 = Object.freeze(object1);
object2.property1 = 33;
// Throws an error in strict mode
console.log(object2.property1);

//decriptor

const abc = {
  property1: 42,
};
const nnn = {
  property2: 34,
};
const descriptor1 = Object.getOwnPropertyDescriptor(abc, "property1");
const descriptor2 = Object.getOwnPropertyDescriptor(nnn, "property2");
console.log(descriptor1.enumerable, "decriptor");
console.log(descriptor2.enumerable);
console.log(descriptor1.value);
console.log(descriptor2.value);

//descriptors

const color = {
  color: "blue",
};
console.log(Object.is(color), "isObject");
console.log(Object.isExtensible(color), "extensible");

const des1 = Object.getOwnPropertyDescriptors(color);
console.log(des1.color);
console.log(des1.color.value);

console.log(Object.getOwnPropertyNames(color), "getName");

//symbol
const ccc = {};
a = Symbol("a");
b = Symbol.for("b");
ccc[a] = "Carry";
ccc[b] = "Marry";
const objectSymbols = Object.getOwnPropertySymbols(ccc);
console.log(objectSymbols.length);

//prototypesof
let animal = {
  eats: true,
};
// create a new object with animal as a prototype
let rabbit = Object.create(animal);
alert(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

//is forzen
console.log(Object.isSealed(color), "forzen");

// keys

console.log(Object.keys(color), "keys");

// extension
const uu = {};
Object.preventExtensions(uu);
console.log(Object.isExtensible(uu), "extension");

//seal
const obj12 = { property1: "Marry" };
const obje2 = Object.seal(obj12);
// prevents other code from deleting properties of an object.
obje2.property1 = "carry";
console.log(obje2.property1);

//setPrototype

let raay = {
  drive() {
    return "Add raay";
  },
};
let naty = {
  net() {
    return "use net";
  },
};
// Set raay's __proto__ to naty's  __proto__'s  __proto__
Object.setPrototypeOf(naty, raay);

console.dir(naty); //prints the naty object
console.log(naty.net()); // use net
console.log(naty.drive()); // Add raay

//values

const emp = {
  a: "Rahul",
  b: 0,
  c: false,
};
console.log(Object.values(emp));

//oprators
//assignment

//  const a=5;

//addition
(a1 = 12), (a2 = 67), (c = a1 + a2);
d = a1 - a2;
e = a1 * a2;
f = a1 / a2;
g = a1 % a2;
console.log(c, "Addition");
console.log(d, "sub");
console.log(e, "mul");
console.log(f, "div");

console.log(g, "modu");



const j=56
const k=11
//comparison
console.log(j==k,"equal")
console.log(j===k,"strick equal")
console.log(j!=k,"not equal ")
console.log(j!==k,"strick not equal ")
console.log(j<k,"less")
console.log(j>k,"greater ")
console.log(j<=k,"less equal")
console.log(j>=k,"greter equal")


//logiccal

m="true"
n="false"
console.log(m&&m,"logiccal AND")
console.log(m&&n,"logiccal AND")
console.log(m||n,"OR")
console.log(!n,"not")

//bitwise
console.log(m&m," AND")
console.log(m|n," or")

console.log(m^n,"XOR")
console.log(m<<n,"left shift")
console.log(m>>n,"right shift")
console.log(m>>>n,"zerofillleft")



//ternary 

function gfg() {
	// JavaScript to illustrate
	// multiple Conditional operators

	let marks = 95;
	let result = (marks < 40) ? "Unsatisfactory" :
		(marks < 60) ? "Average" :
			(marks < 80) ? "Good" : "Excellent";

	console.log(result);
}
gfg();


function gfg() {
   // JavaScript to illustrate
   // Conditional operator
   let PMarks = 40
   let result1 = (PMarks > 39) ?
       "Pass" : "Fail";

   console.log(result1);
}
gfg();

//typeOf 

console.log(typeof 12)

console.log(typeof -31)

