let mark = prompt("Enter student mark (between 0 and 100):");

function studentMark(mark){
if (mark >= 79){
return "Grade A";}
else if (mark >= 60 && mark < 79){
return "Grade B";}
else if (mark >= 49 && mark < 60){
return "Grade C";}
else if (mark >=40 && mark < 49){
return "Grade D";}
else if (mark < 40){
return "Grade E";}
}
let yourGrade = studentMark(mark);

console.log ("your grade is " + yourGrade);



