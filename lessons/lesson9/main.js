import { Employee, Manager } from "./classes.js"


let emp1 = new Employee("Anna Doe", 5000, new Date('03-15-2020'));
let emp2 = new Employee("John Doe", 8500, new Date('03-15-2020'));

emp2.getHireDate = function () { return this.hireDate; }
Manager.prototype.getSalary = function () { return this.salary; }
// console.log(emp1);
// console.log(emp1.name);
// emp1.name = "John Doe"
// console.log(emp1.name);
// console.log(emp1.salary)
// console.log(emp2.salary)

// emp1.isAdmin = true;
// console.log(emp1);


let mgr1 = new Manager("Smith Jane", 10000, new Date('08-15-2019'), 0.05);
// console.log(mgr1);
// console.log(mgr1.calsSalary());
// console.log(Employee.counter);
// console.log(mgr1 instanceof Employee);

// console.log(typeof Employee);
// console.log(typeof Manager);
console.log(mgr1);
console.log(emp1)
