// https://fjolt.com/article/typescript-omit-type

type User = {
  firstName: string;
  lastName: string;
  age: number;
  lastActive: number;
}
 
type UserNameOnly = Omit<User, "age" | "lastActive">
type UserNameAndActive = Omit<User, "age">

const userByName:UserNameOnly = {
    firstName: "John",
    lastName: "Doe",
};
const userWithoutAge:UserNameAndActive = {
    firstName: "John",
    lastName: "Doe",
    lastActive: -16302124725
}