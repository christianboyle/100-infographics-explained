// https://fjolt.com/article/typescript-record-type#record-types-and-union-types

type User = {
  firstName: string,
  lastName: string
}
type Country = "uk" | "france" | "india";

const myData:Record<Country, User> = {
  "uk" : { firstName: "John", lastName: "Doe" },
  "france" : { firstName: "Sarah", lastName: "Doe" },
  "india" : { firstName: "Jane", lastName: "Smith" }
}
