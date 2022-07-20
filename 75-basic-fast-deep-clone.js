const cloneDeep = (obj) => {
  if (typeof obj !== 'object') {
    return obj
  }

  return JSON.parse(JSON.stringify(obj))
}

const myObj = {
  name: 'christian',
  age: '40',
  location: {
    city: 'Fairway',
    state: 'Kansas'
  }
}

console.log(cloneDeep(myObj))

/*
{
  name: 'christian',
  age: '40',
  location: { city: 'Fairway', state: 'Kansas' }
}
*/
