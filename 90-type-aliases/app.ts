// https://dev.to/toluagboola/type-aliases-vs-interfaces-in-typescript-3ggg

type userName = string;
type userId = string | number; // Union type
type arr = number[];

// Object type
type Person = {
    id: userId; // We're making use of another type alias here
    name: userName;
    age: number;
    gender: string;
    isWebDev: boolean;
};

const user: Person = {
    id: 12345,
    name: "Christian",
    age: 40,
    gender: "male",
    isWebDev: true,
};

const numbers: arr = [1, 8, 9];

class Base {
  greetFriend() {
      console.log(`Hello!`);
  }
}

// Interface extending the Base class
interface Derived extends Base {
  giveGist(): void;
}

// New class that extends Base class and implements the Derived interface
class NewClass extends Base implements Derived {
  giveGist() {
      console.log("I saw this the other day...");
  }
}

const c = new NewClass();
console.log(c.greetFriend()); // Hello!
console.log(c.giveGist()); // I saw this the other day...