// Student Result System
let studentName="Rahul",rollNumber=101,mathMarks=85,scienceMarks=78,englishMarks=92;
let studentPercent=(mathMarks+scienceMarks+englishMarks)/300*100;
console.log("-----------------------------------------");
console.log("             STUDENT RESULT              ");
console.log("-----------------------------------------");
console.log("\n");
console.log("Name              : ",studentName);
console.log("Roll No           : ",rollNumber);
console.log("Math              : ",mathMarks);
console.log("\n");
console.log("Science           : ",scienceMarks);
console.log("English           : ",englishMarks);
console.log("\n");
console.log("Total             : ",mathMarks+scienceMarks+englishMarks);
console.log(`Percentage        : ${studentPercent}%`,);
if(studentPercent>=90 && studentPercent<=100)
console.log("Grade             : A");
else if(studentPercent>=80 && studentPercent<=89)
console.log("Grade             : B");
else if(studentPercent>=70 && studentPercent<=79)
console.log("Grade             : C");
else if(studentPercent>=60 && studentPercent<=69)
console.log("Grade             : D");
else if(studentPercent>=40 && studentPercent<=59)
console.log("Grade             : E");
else if(studentPercent<40)
console.log("Grade             : F");
if(mathMarks>=40 && scienceMarks>=40 && englishMarks>=40)
console.log("Result            : PASS");
else
console.log("Result            : FAIL");
console.log("\n");
console.log("-----------------------------------------");