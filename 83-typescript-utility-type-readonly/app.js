// https://fjolt.com/article/typescript-readonly-type
var firstUser = {
    firstName: "John",
    lastName: "Doe"
};
var secondUser = {
    firstName: "Baxter",
    lastName: "Doe"
};
secondUser.firstName = "Ben";
console.log(secondUser.firstName); // Ben
