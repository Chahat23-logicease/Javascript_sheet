console.log( "ARRAY METHODS");

//PART 1

//1
{ let a = [1, 2, 3];
  a.push(4);
   a.unshift(0); 
   console.log(a);} // [0,1,2,3,4]

   //2
   let a = [10, 20, 30]; 
   console.log(a.pop(), a.shift(), a); // 30,10,[20]

   //3
  console.log([1, 2, 3, 4, 5].slice(1, 3));// [2,3]

  //4 
 let b = [1, 2, 3, 4, 5];
  b.splice(1, 2);
   console.log(b); //  [1,4,5]
   
   //5 
   console.log([10, 9, 1].sort()); //[1,10,9]

   //6
   console.log([1, 2, 3].indexOf(5), ["a", "b"].includes("b")); // [-1, true]

   //7
  console.log([1, [2, [3]]].flat());//1,2,[3]

  //8
  console.log(["a", "b", "c"].join("-")); //[a-b-c]

  //PART B

  //1. Create fruits with 5 fruit names. Add "kiwi" at the end, remove the first fruit, and print the length.
   
  const fruits = ["apple","banana","mango", "papaya","guava"]
  fruits.push("kiwi");
  fruits.shift();
  console.log(fruits);

  //2 Sort [40, 100, 1, 5, 25] in ascending numeric order.
{  const numbers = [40, 100, 1, 5, 25];
  numbers.sort((a,b)=> (a-b));
  console.log(numbers);
}
  //3. From [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] create a new array with only the even numbers.
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
  const isEven = num.filter((num) => {
    if (num % 2 === 0)
    return num;
  }); console.log(isEven);

  //4 Use reduce to find the sum of [5, 10, 15, 20].
  const sum = [5, 10, 15, 20];
 const isReduce = sum.reduce((acc,curr) => {
   return (acc+curr);
 } , 0);
 console.log(isReduce);
  
 //5 In [4, 9, 12, 18, 3] find the first number greater than 10 and its index.
 const number= [4, 9, 12, 18, 3] ;
const greater = number.find((number)=>{
           return(number > 10)
});console.log(greater);

//6. Remove duplicates from [1, 2, 2, 3, 3, 3, 4].
const numbers= [1, 2, 2, 3, 3, 3, 4];
const duplicates = new Set(numbers);
console.log(duplicates) ;

// 7 Check if every number in [2, 4, 6] is even, and if some number in [1, 3, 5, 6] is even.
  const arr1 = [2, 4, 6];
  const arr2 = [1, 3, 5, 6] ;
   const result1 = arr1.every((arr1) => {
    return( arr1 % 2 ===0)
   }); console.log(result1);
   const result2 = arr2.some((arr2) => {
    return (arr2 % 2 === 0);
   }); console.log( result2);

 // 8 Make a copy of [1, 2, 3] and add 4 to the copy only (the original must stay unchanged).
  const original = [1,2,3];
  const copy = [...original]
              copy.push(4);
  console.log(copy);
  console.log(original);
  

  
