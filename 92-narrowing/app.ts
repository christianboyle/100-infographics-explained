// https://microsoft.github.io/TypeScript-New-Handbook/chapters/narrowing/

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
      return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}

console.log(padLeft(9, 'test')) //          test