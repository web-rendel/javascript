// Задание 1
// function summ (num1, num2){
//   return num1 + num2;
// }
// console.log(summ(5,5));

// Задание 2

// function min(num1, num2) {
//   if ( num1 < num2 ){
//     return num1;
//   } else {
//     return num2;
//   }
// }
//
// console.log(min(3,-1));

/* ****Домашнее задание 1**** */

//for ( i=1; i <= 100; i++ ){
//    var i = prompt('Введите число, больше 100');
//    if( i === null ) break;
//    i = prompt('Введите число, больше 100');
//}

/* ****Домашнее задание 3 и 4**** */

var i;

for(i=1; i <=100; i++){

  if( i % 3 === 0 && i % 5 === 0 ){
    console.log('FizzBuzz');
  } else if ( i % 3 === 0 ) {
    console.log('Fizz');
  }else if ( i % 5 === 0 ) {
    console.log('Buzz');
  }else{
    console.log(i)
  }
}