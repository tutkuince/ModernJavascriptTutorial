const name = "Tutku Ince";
const department = "IT";
const salary = 4000;

// const a = "Name: " + name + "\n" + "Department: " + department + "\n"
//         + "Salary: " + salary;

const a = `Name: ${name}\nDepartment: ${department}\nSalary: ${salary}`;
// `` alt gr + 2 times ;

// const html = "<ul>" +
//             "<li>" + name + "</li>" +
//             "<li>" + department + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>";

const html = `
    <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
    </ul>
`;

document.body.innerHTML = html;

console.log(a);