//employe recodrds

let employees = [];

function Employee(name, jobTitle, salary, status){

    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log(`Employee Form:\n Name: ${this.name}\n Title: ${this.jobTitle}\n Salary: $ ${this.salary}\n Status: ${this.status}`)
    }
    this.putInList = function(employee){
        employees.push(employee)
    }

}

const ceo = new Employee("Ernesto Torres", "CEO", 150000)

ceo.printEmployeeForm
ceo.putInList
console.log(employees)
