// https://betterprogramming.pub/typescript-advanced-types-type-guards-1018572a5d2f

interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeCode: string;
}

let person: Person | Employee = {
  name: 'Jane',
  age: 20,
  employeeCode: '123'
}

const isPerson = (person: Person | Employee): person is Person => {
  return (person as Person).name !== undefined;  
}

if (isPerson(person)) {
  console.log(person.name);  
}

else {
  console.log(person.employeeCode);  
}

// Jane