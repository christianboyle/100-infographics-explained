// https://microsoft.github.io/TypeScript-New-Handbook/chapters/narrowing/
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
console.log(padLeft(9, 'test')); //          test
