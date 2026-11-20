console.log(" .DATA TYPES");

//1
 console.log(typeof 42, typeof "42", typeof true,
typeof undefined, typeof null, typeof [],
typeof function () {}); //number , string , boolean , undefined , object , object, function
 
//2 
console.log("5" + 3, "5" - 3, "5" * "2", true + 1);// 53, 2, 10, 2

//3 
console.log(0.1 + 0.2 === 0.3) // false

//4
console.log(Boolean(""), Boolean("0"), Boolean(0), Boolean([]));// false , true, false, true

//5 
console.log(null == undefined, null === undefined); //true , false 

//6
console.log(Number("abc"), parseInt("42px"), typeof NaN); // NaN , 42 , number

//PART B

//1 Check whether a value is an array. Explain why typeof is not enough
let students = ["A","B","C","D"];
console.log(typeof(students));  
console.log(Array.isArray(students)) //becaue type of [] return object so we use Array.isArray()

//2  Convert the string "123" into a number in three different ways.
let str = "123";
 console.log(Number(str)) ; 
 console.log(parseInt(str));
 console.log(+str);

 //3  Write getType(value) that returns "null" for null, "array" for arrays, and typeof value otherwise
function getType(value) {
    if(value === null){
        return "null";
    }
    if (Array.isArray(value)){
        return "array";
    } else{
        return typeof(value)
    }
} console.log(getType(null));
console.log(getType([1,2]));
console.log(getType(123) )

//4 List the six falsy values in JavaScript.
 console.log(Boolean(0), Boolean(false),Boolean(), Boolean(""), Boolean(null),Boolean(undefined));

 //5 Make this comparison work correctly: 0.1 + 0.2 === 0.3 (it prints false)
let result =Number((0.1 +0.2).toFixed(1));
console.log(result === 0.3);