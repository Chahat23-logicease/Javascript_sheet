console.log("FOR EACH")

//1
// [1, 2, 3].forEach(n => console.log(n * 2)); [2,4,6]

// 2 
// ["a", "b"].forEach((v, i) => console.log(i, v)); 1,0

//3 
const r = [1, 2].forEach(n => n); console.log(r); // forEach return undefined

//4 
let total = 0;
 [1, 2, 3].forEach(n => total += n);
 console.log(total); // 6

 //5
 const out = [];
  ["x", "y"].forEach(c => out.push(c + c));
  console.log(out); // xx,yy

  // PART B

  // 1. Print each item of ["apple", "banana", "mango"] as a numbered list: "1. apple", "2. banana"...
 const item =  ["apple", "banana", "mango"];
item.forEach((v,i)=> {
     console.log(`${i+1} . ${v}`);
 });

 //2  Use forEach to calculate the sum of [10, 20, 30].
 const number = [10,20,30]
 let sumIs= 0;
 number.forEach(n => sumIs += n)
 console.log(sumIs);

 //3 Count how many words in ["apple", "banana", "avocado", "cherry"] start with "a".
 const fruits= ["apple", "banana", "avocado", "cherry"] ;
  let count = 0;
   fruits.forEach((fruit)=> {
    if(fruit.startsWith("a"))
        count++;
   });
   console.log(count);

//4 Given [{name:"Aman", marks:78}, {name:"Riya", marks:92}], print "Aman - 78", "Riya - 92".
   const students =  [{name:"Aman", marks:78}, {name:"Riya", marks:92}];
   students.forEach((v,i) => {
    console.log(`${v.name} - ${v.marks}`);
   });
//5  Use forEach to put the squares of [1, 2, 3] into a new array called squares.
 const arr3 = [1,2,3];
 let square = [];
    arr3.forEach((n) => {
    square.push(n*n);
    })
 console.log(square);

 //6 Why can't you use break inside forEach, and which loop could you use instead?
 // break is udsed to terminate the loop and forEach is not a loop its a method
 