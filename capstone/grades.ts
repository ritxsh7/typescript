

function showGrade(marks: number): void{

    console.log(`Grade for ${marks} % :`);
    
    if (marks >= 90)
        console.log("A+");
    else if (marks >= 80 && marks <= 89)
        console.log("A");
    else if (marks >= 70 && marks <= 79)
        console.log("B+");
    else if (marks >= 60 && marks <= 69)
        console.log("B");
    else
        console.log("P");
}

showGrade(93);
showGrade(80);
showGrade(45);

