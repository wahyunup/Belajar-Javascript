// let num = 0;
// asserts (num < 10);{
//     console.log();
//     num++;
// }

// for (let num = 0; num < 10; num++) {
//     console.log(num);
// }

const password = '12382456i';

let guess = prompt('enter the password');
while (guess !== password){
    guess = prompt ('enter the password');
}
alert('congratulation! the password is correct');