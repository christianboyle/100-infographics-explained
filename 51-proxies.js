// https://www.javascripttutorial.net/es6/javascript-proxy/

const user = {
  firstName: 'John',
  lastName: 'Doe'
}

const handler = {
  get(target, property) {
    return property === 'fullName'
      ? `${target.firstName} ${target.lastName}`
      : target[property]
  }
}

const proxyUser = new Proxy(user, handler)

console.log(proxyUser.fullName) // John Doe
