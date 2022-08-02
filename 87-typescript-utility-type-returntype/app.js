// https://fjolt.com/article/typescript-returntype-utility-type
function sendData(a, b) {
    return {
        a: "" + a,
        b: "" + b
    };
}
function consoleData(data) {
    console.log(JSON.stringify(data)); // {"a":"1","b":"2"}
}
var stringifyNumbers = sendData(1, 2); // { a: '1', b: '2' } 
//consoleData(stringifyNumbers);
