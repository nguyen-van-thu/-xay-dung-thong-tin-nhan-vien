enum Gender {
    MALE,
    FEMALE,
    OTHER
}
class Employee {
    fullname: string = "";
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string = "";
    phoneNumber: string = "";
    constructor(fullname: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList: Employee[] = [];
employeeList.push(new Employee("Nguyen Van thu", Gender.MALE, new Date("1992-08-13"), "anguyen@gmail.com", "0123456789"));

employeeList.push(new Employee("Tran Thi A", Gender.FEMALE, new Date("1999-10-03"), "btran@gmail.com", "0123456790"));


employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("2000-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee: Employee) {

    console.log(employee);


}
employeeList.forEach(showEmployee);