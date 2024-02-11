// const pilihan = ['abcd'];
// for (let i = 1; i <= 10; i++){
//     console.log(`${i}. Soal Nomor ${i}:`);
// }

// let x = [1,2,3];
// [x[2],x[0]]=[x[0],x[2]];
// console.log(x);

// function calculateBill(meal, taxRate = 0.05){
//     const total = meal * (1 + taxRate);
//     return total;
// }

// const myTotal = calculateBill (100, 0.13);

const pilihan = 'abcd'
for (let i = 1; i <= 10; i++){
    console.log(`${i}. test soal ${i}:`);
    for (let j = 0; j < pilihan.length; j++){
        console.log(`${pilihan[j]}. pilihan jawaban`);
    }
}