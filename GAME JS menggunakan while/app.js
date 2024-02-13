let maximum = parseInt(prompt('Masukan Nilai Maksimal'));
while (!maximum){
    maximum = parseInt(prompt('Masukan Nilai Maksimal'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('isi tebakan pertama kamu'));

let attempt = 1;

while (parseInt(guess) !== targetNum) {
    attempt++;
    if (guess > targetNum){
        guess = parseInt(prompt('Terlalu tinggi tebak lagi :'));
    } else{
        guess = parseInt(prompt('Terlalu rendah tebak lagi :'));
    }
}

alert(`tebakan kamu benar! dengan percobaan ${attempt} kali`);
