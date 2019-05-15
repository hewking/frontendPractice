var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
function sayHello(arg) {
    return 'hello' + arg.firstName + " lastName : " + arg.lastName;
}

console.log(sayHello({
    firstName:'cheng',
    lastName:'jianhao'
}))

