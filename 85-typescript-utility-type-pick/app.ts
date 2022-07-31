// https://fjolt.com/article/typescript-pick-type

type User = {
  firstName: string,
  lastName: string,
  age: number
}

type UserName = Pick<User, "firstName" | "lastName">

let user:UserName = {
  firstName: "John",
  lastName: "Doe"
}

type UserAge = Pick<User, "age">

let age:UserAge = {
    age: 1534
}