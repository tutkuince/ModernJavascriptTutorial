function Employee(name, age, salary) {   // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    // console.log(this);
    this.showInfos = function () {
        console.log(this.name, this.age, this.salary);
    }
}

const emp1 = new Employee("Tutku", 30, 4000);
const emp2 = new Employee("Emin", 28, 5000);

emp1.showInfos();
emp2.showInfos();

// console.log(emp1);
// console.log(emp2);