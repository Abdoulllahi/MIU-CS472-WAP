class Employee {

    #fullName;
    salary;
    hireDate;
    static counter = 0;

    constructor(fname, salary, hdate) {
        this.#fullName = fname;
        this.#setSalary(salary);
        this.hireDate = hdate;
        Employee.incCounter();
    }

    calsSalary() { //instance method
        return this.salary;
    }

    static incCounter() { //static method
        Employee.counter += 1;
    }

    static getCounter() {
        return Employee.counter;
    }

    #setSalary(s) { // private instance method
        this.salary = s;
    }

    get name() { return this.#fullName; }
    set name(n) { this.#fullName = n; }
}



class Manager extends Employee {
    bonus = 0;
    constructor(fname, salary, hdate, bonus) {
        //super(fname, salary, hdate);
        super();
        this.bonus = bonus;
    }
    calsSalary() {
        let s = super.calsSalary();
        return s * this.bonus + s;
    }
}

export { Employee, Manager };