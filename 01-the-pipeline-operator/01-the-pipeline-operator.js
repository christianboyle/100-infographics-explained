const multiply20 = (price) => price * 20
const divide100 = (price) => price / 100
const normalizePrice = (price) => price.toFixed(2)

const discountComposed = normalizePrice(divide100(multiply20(200)))

console.log(discountComposed) // 40.00

const discountPiped = 200 
|> multiply20(^) 
|> divide100(^) 
|> normalizePrice(^)

console.log(discountPiped) // 40.00