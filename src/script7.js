console.log("MAP");

//1 
console.log([1, 2, 3].map(n => n * n)); //[1,4,9]

//2
console.log(["a", "b"].map((c, i) => c + i)); //[a0,b1]

//3 
console.log(["1", "2", "3"].map(Number)); // 1,2,3

//4 
console.log(["1", "2", "3"].map(parseInt)); // 1,NaN, NaN

// 5
console.log([1, 2, 3].map(n => { n * 2 })); // undefined because cury braces need return
 
 // PART B

 // 1. Add a flat delivery charge of 50 to every price in [100, 250, 400].
 let charge = [100,250,400];
 let delieveryCharge = charge.map((n)=> n+50)
 console.log(delieveryCharge)

 //2 Convert ["amit", "neha", "raj"] to uppercase.
 let names = ["amit", "neha", "raj"] ;
let uppercase = names.map((name) => name.toUpperCase());
console.log(uppercase)

//3  From [{name:"Aman", age:20}, {name:"Riya", age:17}] get an array of just the names.
const arr3 = [{name:"Aman", age:20}, {name:"Riya", age:17}];
let justName = arr3.map((arr3) => console.log(`${arr3.name}`))

//4. Using the same users, create objects like { name: "Aman", isAdult: true }.
let createObject = arr3.map((arr3) => {
    return {name:arr3.name,
    isAdult:true}
});console.log(createObject);

//5 Turn ["10", "20", "30"] into numbers, then double each one.
 let number = ["10", "20", "30"];
 const result = number.map((num) => num *2)
 console.log (result);

 //6 Get the length of each word in ["js", "array", "map"].
 const words = ["js", "array", "map"];
 let length = words.map((words)=> words.length);
 console.log(length);

 // 7 Chain methods: from [1..10] keep the even numbers, square them, then add them up.

 let numbers= [1,2,3,4,5,6,7,8,9,10];
 let result2 = numbers.filter(num => num %2 === 0)
 .map (num => num* num)
 .reduce((sum,num)=> sum += num);
 console.log(result2);
