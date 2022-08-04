// https://www.educative.io/blog/typescript-interfaces

interface User {
  id: number;
  firstName: string;
  lastName: string;
  getFullName: () => string;
}

let userObj: User = {
  id: 12,
  firstName: "Christian",
  lastName: "Boyle",
  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(userObj.getFullName()) // Christian Boyle