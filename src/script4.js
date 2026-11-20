console.log(" ARROW FUNCTION")

//1
const sq = n => n * n;
console.log(sq(5));//25

//2
const getUser = () => ({ name: "Aman" });
console.log(getUser()); // name: Aman

//3 
const add = (a, b) => { a + b };
console.log(add(1, 2)); //undefined because return is not written 

//4
const greet = (name = "Guest") => `Hi, ${name}`;
console.log(greet(), greet("Riya")); // hi Guest , hi Riya

//5
const nums = [1, 2, 3];
console.log(nums.map(n => n + 1));// [2,3,4]

// PART B

//1 Convert to an arrow function: function double(n) { return n * 2; }
const double= (n)=> {
    return n*2 
}; console.log("double is:",double(10));

//2. Write an arrow function isAdult(age) that returns true if age is 18 or more.
const isAdult = (age)=> {
    if(age>18) {
        return true;
    }
    else {
    return false};

} ; console.log(isAdult(30));
console.log(isAdult(10));

//3 Write an arrow function makeUser(name, age) that returns an object { name, age }.

const makeUser = (name,age) => {
    return `hi ${name} your age is ${age}`
}; console.log(makeUser("chahat",22));

//4 Write an arrow function bigger(a, b) that returns the larger number using the ternary operator.

const biggest = (a,b) =>{
    return ( a>b ? a : b)
};console.log(biggest(50,10));

// 5. In one sentence, explain why an arrow function is a poor choice for an object method
