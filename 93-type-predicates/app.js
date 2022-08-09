// https://betterprogramming.pub/typescript-advanced-types-type-guards-1018572a5d2f
var person = {
    name: 'Jane',
    age: 20,
    employeeCode: '123'
};
var isPerson = function (person) {
    return person.name !== undefined;
};
if (isPerson(person)) {
    console.log(person.name);
}
else {
    console.log(person.employeeCode);
}
// Jane
