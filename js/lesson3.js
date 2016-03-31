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

//var i;
//
//for(i=1; i <=100; i++){
//
//  if( i % 3 === 0 && i % 5 === 0 ){
//    console.log('FizzBuzz');
//  } else if ( i % 3 === 0 ) {
//    console.log('Fizz');
//  }else if ( i % 5 === 0 ) {
//    console.log('Buzz');
//  }else{
//    console.log(i)
//  }
//}


/* ****Домашнее задание 5**** */
//var board = '';
//var line = '';
//var tr = 3;
//var td = 3;
//for(var i = 0; i<tr; i++){
//  if(i%2===0){
//    line = '#';
//  }else{
//    line = '$';
//  }
//  for (var j = 0; j<td-1; j++){
//    if(line[j]=== '$'){
//      line += '#';
//    }else{
//      line += '$';
//    }
//  }
//  board += line ;
//}
//console.log(board);

/* ****Домашнее задание 6**** */
function pow(x,n){
  var result = x;
  for (var i = 1; i<n; i++){
   result = result * x;
  }
  return result;
}
console.log(pow(3,3));

