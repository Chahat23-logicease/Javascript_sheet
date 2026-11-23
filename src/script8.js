console.log(" MIXED QUESTIONS");

const students = [  { name: "Aman",   marks: 78 },
      { name: "Riya",   marks: 92 },
      { name: "Karan",  marks: 45 },
      { name: "Simran", marks: 60 }, 
      { name: "Dev",    marks: 33 }, 
    ];

//1 Get the names of students who scored 50 or more (use filter and map).
 let result1 = students.filter((student)=> student.marks>50);
 result1.map((student)=> student.name
); console.log(result1);

//2. Find the average marks (use reduce).
let total = students.reduce((acc, cur)=>
     acc+ cur.marks
,0)
let average = total/students.length;
console.log(average);

// 3 Find the name of the top scorer.
 let result3= students.reduce((acc,cur) => {
    return ( acc.marks > cur.marks ? acc : cur)
 });
 console.log(result3);

//4 Create a new array where each student also has a grade: "A" for 75+, "B" for 50-74, else "C".
let result4 = students.map((student)=> {
    
        if(student.marks>75)
            return{...student,grade:"A"}
        else if(student.marks>50)
          return{ ...student, grade:"b"}
        else 
        { return{
            ...student,grade:"c"
        }}
    
});console.log(result4);

//Use forEach on graded to print lines like "Aman: A".

let result5 = result4.forEach((student)=> {
    console.log(`${student.name} : ${student.grade}`)
})