// https://fjolt.com/article/typescript-required-type

type User = {
  firstName: string,
  lastName?: string
}

let firstUser:User = {
  firstName: "John",
}

let secondUser:Required<User> = {
  firstName: "John",
  lastName: "Doe"
}