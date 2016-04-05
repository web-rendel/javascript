//function sumTo(n){
//    if (n != 1){
//        return n + sumTo( n - 1 );
//    }else {
//        return n;
//    }
//}
//console.log(sumTo(100));


//function superrandom1 (max, min){
//    console.log(Math.floor(Math.random() * (max - min + 1)+ min));
//}
//superrandom1(10,20);


//function superrandom2 (max){
//    console.log(Math.floor(Math.random() * (max - 0 + 1)+ 0));
//}
//superrandom2(20);


function  upperFirst(str){
    console.log(str[0].toUpperCase() + str.slice(1));
}
upperFirst('welcome');