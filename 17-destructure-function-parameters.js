// https://blog.greenroots.info/a-practical-guide-to-object-destructuring-in-javascript

const student = {
  fullname: 'John Williamson',
  age: 9,
  std: 3,
  subjects: ['Maths', 'English', 'EVS'],
  parents: {
    father: 'Brown Williamson',
    mother: 'Sophia',
    email: 'john-parents@abcde.com'
  },
  address: {
    street: '65/2, brooklyn road',
    city: 'Carterton',
    country: 'New Zealand',
    zip: 5791
  }
}

//const name = student.name
//const city = student.address.city
// console.log(name, city) // John Williamson Carterton

// const { fullname } = student
// const {
//   address: { city }
// } = student
// console.log(fullname, city) // John Williamson Carterton

const sendEmail = ({ parents: { email } }) => {
  console.log(`Sent email to ${email}`)
}

sendEmail(student) // Sent email to john-parents@abcde.com
