// 10 Optional Chaining
// ?. (safe acces to nested values)

let obj = {
    name: {
        first: "harsh",
        secont: {
            sf: "sing",
            sl: "somthing",
        },
    },
};
console.log(obj?.name?.first); // it will check does obj exist, does name exist if that is there then console