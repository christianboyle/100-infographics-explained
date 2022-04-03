const myFunction = () => {
  return
  {
    prop: 1
  }
};

console.log(myFunction()) // undefined

const myOtherFunction = () => {
  return {
    prop: 1
  }
};

console.log(myOtherFunction()) // { prop: 1 }