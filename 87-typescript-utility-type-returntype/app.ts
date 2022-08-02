// https://fjolt.com/article/typescript-returntype-utility-type

function sendData(a: number, b: number) {
  return {
      a: `${a}`,
      b: `${b}`
  }
}

type Data = ReturnType<typeof sendData>

function consoleData(data:Data) {
  console.log(JSON.stringify(data));
}

let stringifyNumbers = sendData(1, 2);
consoleData(stringifyNumbers); // {"a":"1","b":"2"}