// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#evaluated_at_call_time

const required = (parameterName) => {
  throw new Error(`${parameterName} is a required parameter`)
}

const myFunction = (arg = required('arg')) => {
  return arg
}

// console.log(myFunction()) // arg is a required parameter

console.log(myFunction('anything')) // anything
