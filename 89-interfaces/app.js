// https://www.educative.io/blog/typescript-interfaces
var userObj = {
    id: 12,
    firstName: "Christian",
    lastName: "Boyle",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(userObj.getFullName()); // Christian Boyle
