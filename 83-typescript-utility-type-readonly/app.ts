// https://fjolt.com/article/typescript-readonly-type

type User = {
  firstName: string,
  lastName: string
}

let firstUser:Readonly<User> = {
  firstName: "John",
  lastName: "Doe"
}

firstUser.firstName = "Dave" // Cannot assign to 'firstName' because it is a read-only property.
