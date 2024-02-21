const fruits = {
    Mango : 10,
    apple : 20,
    Durian : 10,
    Rambutan : 50,
    Kedongdong : 90
}

// for (let fruit in fruits){
//     console.log(`${fruit} ${fruits[fruit]}Kg`)
// }

let total = 0;
let scores = Object.values(fruits);

for (let score of scores){
    total += score;
}

console.log(total / scores.length);