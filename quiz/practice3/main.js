'use strict';
class Employee {

    #fullName;
    static #counter = 0;

    constructor(name, salary, hiredate) {
        this.#fullName = name;
        this.salary = salary;
        this.hiredate = hiredate;
        Employee.incCounter();
    }

    calcSalary() {
        return this.salary;
    }

    static incCounter() {
        this.#counter++;
    }

    static getCounter() {
        return this.#counter;
    }

    get name() {
        return this.#fullName;
    }

    set name(name) {
        this.#fullName = name;
    }


}

class Manager extends Employee {

    constructor(name, salary, hiredate, bonus) {
        super(name, salary, hiredate);
        this.bonus = bonus;
    }

    calcSalary() {
        return super.calcSalary() * this.bonus + super.calcSalary(mù);
    }
}

let employee1 = new Employee("John Doe", 123558, Date(2000, 12, 12));
let employee2 = new Employee("Anna Smith", 100000, Date(2013, 5, 6));
// employee2.name = ;
// // let manager = new Manager(45000, Date(2005, 10, 11));
// // manager.name = "Mike Stone";
console.log(employee1)
console.log(employee1 instanceof Employee)