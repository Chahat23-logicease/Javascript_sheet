console.log(" .FUNCTIONS");

//1
 function add(a, b) { return a + b; }
console.log(add(2, 3), add(2));// 5, NaN because 2+undefined shows "not a number"

//2
function greet(name = "Guest") {
return `Hello, ${name}`;
}
console.log(greet());//Hello Guest
//3
function f() {
console.log("a");
return;
console.log("b");
}
f(); // a because code after return never run

//4
   console.log(square(4));
   function square(n) { return n * n; } // 16 because we can call function before declare 
   
 //5
   function makeCounter() {
   let c = 0;
  return function () { c++; return c; };
}
  const next = makeCounter();
   next();
   next();
    console.log(next());//3  because of closure 

    //PART 2

    //1. Write isEven(n) that returns true when n is even
    function isEven(n){
    if ( n%2 == 0){
        return true;
    }else {
        return false;
    }
    };console.log(isEven(100));

    //2. Write largest(a, b, c) that returns the biggest of three numbers.
   function biggest(a,b,c){
    if(a>b && a>c)
        return a;
    else if(b>a && b>c) 
        return b;
    else {return c};
     };console.log('biggest number is:', biggest(40,50,30));

     //3. Write sumAll(...nums) using rest parameters. sumAll(1, 2, 3, 4) should give 10
     function sumAll(...nums){
     let sum = 0;
     for(let i =0; i<nums.length; i++){
        sum += nums[i];
     } return sum;
     }console.log('total is:', sumAll(1,2,3,4));

     //4. Write a recursive factorial(n). factorial(5) should be 120.
    function factorial(n){
        let f=1;
        for(let i=n; i>1; i--){
            f *= i;
        } return f;
    } console.log('factorial is:', factorial(5))

    //5. Write multiplier(n) that returns a function. const triple = multiplier(3); triple(4) should give 12
   function multiplier (n){
    return function(num){
        return (n*num);
    };
   }const triple= multiplier(3);
   console.log(triple(4));

   //6. Write reverseString(str) that returns the string reversed.
   function reverseString(str) {
    let stg= "";
    for(let i=str.length-1; i>=0; i--){
        stg = stg + str[i];
    };return stg;
   };
console.log(reverseString("hello javascript"))