interface Employee{
    firstName: string;
    lastName: string;
}

function getFullName(emp: Employee) {
    console.log(emp.firstName + " " + emp.lastName);
}

let emp = {
    firstName: "Ritesh",
    lastName : "Patil"
}

getFullName(emp);