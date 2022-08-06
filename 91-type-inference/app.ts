// https://www.tektutorialshub.com/typescript/type-inference-in-typescript/

// Function Return type

function add(a=10, b=10) { //a & b are inferred as numbers
  console.log(typeof a, typeof b) // number number
  return a+b
}
 
let x=add(); //x is inferred as number.
console.log(typeof x) // number

// Objects

let employee = {} // inferred as {}
employee['code'] = 123 // OK
employee['name'] = "Christian Boyle" // OK
// employee.code = 100 // Error Property 'code' does not exist on type '{}'