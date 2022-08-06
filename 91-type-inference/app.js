// https://www.tektutorialshub.com/typescript/type-inference-in-typescript/
// Function Return type
function add(a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 10; }
    console.log(typeof a, typeof b); // number number
    return a + b;
}
var x = add(); //x is inferred as number.
console.log(typeof x); // number
// Objects
var employee = {}; // inferred as {}
employee['code'] = 123; // OK
employee['name'] = "Christian Boyle"; // OK
// employee.code = 100 // Error Property 'code' does not exist on type '{}'
