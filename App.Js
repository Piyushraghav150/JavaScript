// Variables var let const //
// var //
// var a = 5;
// var a = 6;
// console.log(a,a)
// {
//     var a = 20;
//     console.log(a)
// }


// let //
// let a = 4;
// let b = 5;
// {
//     let c = 20;
//     console.log(c)
// }
// console.log(a,b)


// const //
// const error //
// const name1 = "ram"
// console.log(name1)
// let name1 = "ram"
// console.log(name1)
// const run //
// const n2 = "rahul1"
// console.log(n2)
// const n3 = "rahul1"
// console.log(n3)


// Data Types in Js //
// let a = null;
// let b = 5;
// let c = "hi";
// let d = true;
// let e = Symbol("This is datatypes");
// let f = BigInt("9") + BigInt("1");
// let g = undefined;
// console.log(a, b, c, d, e, f, g)


// Objects in Js//
// const itemlist = {
//     "pen": 10,
//     "book": 11,
//     "bag": 12,
//     "shoes": 14,
// }
// console.log(itemlist["pen"])
// console.log(itemlist["book"])
// console.log(itemlist["bag"])
// console.log(itemlist["shoes"])


// Operators in Js //
// Arithmetic Operators //
// let a = 3;
// let b = 4;
// console.log("Sum of a and b is = ", (a + b))
// console.log("Sum of a and b is = ", (a - b))
// console.log("Sum of a and b is = ", (a * b))
// console.log("Sum of a and b is = ", (a ** b))
// console.log("Sum of a and b is = ", (a / b))
// console.log("Sum of a and b is = ", (a % b))
// console.log("Sum of a and b is = ", (a++))
// console.log("Sum of a and b is = ", (a--))


// Assignment Operators //
// let c = 10;
// let d = 11;
// console.log("Sum of c and d is = ", (c += d))
// console.log("Sum of c and d is = ", (c -= d))
// console.log("Sum of c and d is = ", (c *= d))
// console.log("Sum of c and d is = ", (c **= d))
// console.log("Sum of c and d is = ", (c /= d))
// console.log("Sum of c and d is = ", (c %= d))


// Comparison Operators //
// let x = 23;
// let y = 34;
// console.log("Sum of x and y is = ", (x == y))
// console.log("Sum of x and y is = ", (x != y))
// console.log("Sum of x and y is = ", (x === y))
// console.log("Sum of x and y is = ", (x !== y))
// console.log("Sum of x and y is = ", (x > y))
// console.log("Sum of x and y is = ", (x < y))
// console.log("Sum of x and y is = ", (x >= y))
// console.log("Sum of x and y is = ", (x <= y))


// Logical Operators //
// let q = 5;
// let r = 6;
// console.log(q>r && q==6)
// console.log(q<r || r==6)
// console.log(!true)
// console.log(!false)


// Conditional Statements in Js //
// let n = prompt("Hey whats your age?");
// n = Number.parseInt(n)
// if else statements //
// if(n>0) {
//     alert("This is a Valid age?");
// }
// else{
//     alert("This is an Invalid age?");
// }
// console.log(n)


// if, else if, else statements //
// if (n<0) {
//     alert("This is Invalid age?");
// }
// else if (n<10) {
//     alert("you are a kid?");
// }
// else if (n<20 && n>=15) {
//     alert("You can Drive after 20?");
// }
// else{
//     alert("You can Drive?")
// }
// console.log(n)
// console.log("done")


// ternary Operator //
// console.log("you can", n < 20 ? "not drive" : "drive")


// Loops in Js //
// For loop //
// print nums //
// for (let i = 0; i<50; i++) {
//     console.log(i);
// }


// For in loop //
// print in Object value a and obj[a] //
// let obj = {
//     "book": 1,
//     "pen": 2,
//     "shoes": 3,
// }
// for (let a in obj) {
//     console.log("This is my " + a + obj[a])
// }


// For of loop //
// obj is not itrabile //
// for (let a of obj) {
//     console.log("This is my " + a + obj[a])
// }


// While & do While loop //
// let n = prompt("Enter the value of n?");
// n = Number.parseInt(n)
// while loop //
// let i = 0;
// while(i<n) {
//     console.log(i)
//     i++;
// }


// do while loop //
// let i = 5;
// do{
//     console.log(i)
//     i++;
// }while (i<n)


// Function in Js // 
// basic function //
// function myFunction() {
//     console.log("Welcome in JS 1");
//     console.log("Welcome in JS 2");
//     console.log("Welcome in JS 3");
//     console.log("Welcome in JS 4");
//     console.log("Welcome in JS 5");
// }
// myFunction();
// Function run //
// function OneNumPrt(x, y) {
//     console.log("Done");
//     return 1 + (x + y) / 2
// }
// let a = 4;
// let b = 5;
// let c = 6;

// console.log("One Number Print b and c is ", OneNumPrt(b, c));
// console.log("One Number Print a and b is ", OneNumPrt(a, b));
// console.log("One Number Print a and c is ", OneNumPrt(a, c));
// Arrow function //
// const hello = () => {
//     console.log("Hey you")
//     return "hi"
// }
// function OneNumPrt(x, y) {
//     console.log("Done");
//     return 1 + (x + y) / 2
// }

// const sum = (p, q) => {
//     return p + q
// }
// let a = 4;
// let b = 5;
// let c = 6;

// console.log("One Number Print b and c is ", OneNumPrt(b, c));
// console.log("One Number Print a and b is ", OneNumPrt(a, b));
// console.log("One Number Print a and c is ", OneNumPrt(a, c));
// console.log(sum(10,5));
// hello();
// let d = hello();
// console.log(d);


// Strings in Js //
// let name1 = "Rahul";
// console.log(name1)
// let name2 = 'Shayam';
// console.log(name2)

// Template Literals //
// let men1 = "Ram";
// let men2 = "Shiv";
// let Sentence = `${men2} is a Friend of ${men1}`
// console.log(Sentence)

// Escape Sequence character //
// let Fruit1 = 'Ap`ple';
// console.log(Fruit1)
// let Fruit2 = 'Bana\'na';
// console.log(Fruit2)
// let Fruit3 = 'Bana\"na';
// console.log(Fruit3)
// let Fruit4 = 'Bana\nna';
// console.log(Fruit4)
// let Fruit5 = 'Bana\tna';
// console.log(Fruit5)
// let Fruit6 = 'Bana\rna';
// console.log(Fruit6)

//  String Properties //
// let name1 = "Rajkumar";
// console.log(name1.length)
// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())
// console.log(name1.slice(2,6))
// console.log(name1.slice(3))
// console.log(name1.replace("Raj","Paj"))


// Arrays in Js //
// const fruits = ["banana","34",5,null,true];
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[2] = 8)
// console.log(typeof fruits)

// Array Methods //
// let num = [1, 2, 3, 44, 5];
// let b = num.toString()
// console.log(b, typeof b)
// let c = num.join("_")
// console.log(c, typeof c)
// num.pop()
// console.log(num)
// num.push(6)
// console.log(num)
// num.shift()
// console.log(num)
// num.unshift(66)
// console.log(num)
// delete num[0]
// console.log(num)

// Array Methods 2 //
// For Each loop //
// let num = [2, 4, 5, 6, 7, 8];   
// num.forEach((Element) => {
//   console.log(Element * Element);
// });

// Array.from //
// let name1 = "Harry";
// let arr = Array.from(name1)
// console.log(arr)

// for...of //
// for (let i of num){
//     console.log(i)
// }

// for...in //
// for (let i in num){
//     console.log(i)
// }

// Map() //
// let arr = [10, 20, 30, 40];
// let ar = arr.map((value, index, Element) => {
//     return (value, index, Element)
// })
// console.log(ar)

// Array filter //
// let arr2 = [11, 22, 33, 44, 55];
// let a2 = arr2.filter((a) => {
//     return a<40
// })
// console.log(a2)

// Reduce //
// let arr3 = [1, 2, 3, 4, 5, 66];
// let newarr3 = arr3.reduce((h1, h2) => {
//     return h1 + h2
// })
// console.log(newarr3)


// JavaScript in the Browser //
// JavaScript browser //
// console.log(alert("Hello"));
// Console object Methods //
// console.log(console)
// console.error("Hey error")
// console.assert(10>29)
// console.assert(10<29)
// console.clear()
// obj = {a:1, b:2, c:3}
// console.table(obj)
// console.warn("Hey")
// console.info("This is me")

// alert prompt confirm //
// alert("Hey whats you");
// let a = prompt("Enter the value of a?");
// a = Number.parseInt(a);
// console.log(a)
// confirm //
// alert("Enter a?")
// let a = prompt("666")
// a = Number.parseInt(a)
// alert("you")
// let write = confirm("Hello Js");
// if (write){
//     document.write(a)
// }
// else{
//     document.write("Please me")
// }


// DOM in JavaScript //




