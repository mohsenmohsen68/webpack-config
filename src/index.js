const products = {
    laptops:4,
    mobile:9,
    ipods:224,
}

const branch2Products = {
    ...products,
    softwarePack:42,
    playStation:22,
}

console.log("products --->", products)
console.log("branch products --->", branch2Products)