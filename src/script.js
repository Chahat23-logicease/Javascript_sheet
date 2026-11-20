console.log(" .DATA TYPES");

//1
let a = 5;
let b = a;
b = 10;
console.log(a, b); // output 5,10
//2
// const x = 3;
// x = 4;
// console.log(x) // error because x is constand we cant reassign 
//3 
const arr = [1, 2];
arr.push(3);
console.log(arr); // [1,2,3]
//4
console.log(v);
var v = 7; // it shows undefined because it execute before declare
//5
{
let y = 1;
}
console.log(typeof y);// undefined because let is block scope 

// PART B (WRITE THE CODE)

/* 1. Declare variables for a person's name (string), age (number) and isStudent (boolean) using the most suitable
keyword for each. Print one sentence using a template literal */

let name = "chahat";
let age = 22;
const isStudent = true;
 console.log(`Haii my name is ${name} and I am ${age} years old`);

 //2. Swap the values of a = 1 and b = 2 without using a third variable.
{ let m= 1;
 let n= 2;
 [m,n] = [n,m]
 console.log("m:",m,"n:",n);
}
 /*3. Create const person = { name: "Riya", city: "Ludhiana" }. Change city to "Delhi" and add an age
property. Add a comment explaining why const allows this*/

const person = { name: "Riya", city: "Ludhiana" }

person.city = "Delhi"; 
person.age = 20;
console.log(person)// because we change inside the object value or add value inside person object bt we can't change person

// 5.Store price = 250 and quantity = 3 in variables and print the total cost using a template literal.
const price = 250;
const quantity= 3;
console.log(`the total cost is ${price * quantity} `);

