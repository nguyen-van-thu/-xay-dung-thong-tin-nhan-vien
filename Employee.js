var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, birthday, email, phoneNumber) {
        this.fullname = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Nguyen Van thu", Gender.MALE, new Date("1992-08-13"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Tran Thi A", Gender.FEMALE, new Date("1999-10-03"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("2000-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
