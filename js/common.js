// Задание 3

//var login = 'admin';
//var password = 'passw0rd'
//
//var userLogin = prompt('Введите Ваш логин');
//
//if( userLogin == login ){
//    var userPass = prompt( 'Введите Ваш пароль' );
//    if( userPass == password ){
//        alert( 'Welcome home!' );
//    } else if ( userPass === null ){
//        alert( 'Canceled' );
//    }
//    else if ( password != userPass ){
//        alert( 'Wrong password' );
//    }
//} else if ( userLogin === null ){
//    alert( 'Canceled' );
//} else if ( userLogin != login ) {
//    alert( 'Access denied' );
//}

// Задание 4
//a
    //var a = 1; var b = 2;
    //
    //var msg = ( a+ b >= 3 ) ? 'Yep' : 'Noup';
    //alert ( msg );
//b
//var name = '';
//
//var msg =  ( name == 'admin' ) ? 'Hi':
//        ( name == 'manager' ) ? 'Hello' :
//        ( name == '' ) ? 'No login' : '';
//alert ( msg );


//Lesson 3

// var browserIE = 'IE';
// var browserChrome = 'Chrome';
// var browserSafari = 'Safari';
// var browserOpera = 'Opera';
//
// var userBrowser = prompt('Введите название браузера');
//
// if( userBrowser == browserIE ) {
//   alert( 'О, да у вас IE!' );
// } else if( userBrowser == browserChrome ) {
//   alert( 'Браузер норм!' );
// } else if( userBrowser == browserSafari ) {
//   alert( 'Браузер норм!' );
// } else if( userBrowser == browserOpera ) {
//   alert( 'Браузер норм!' );
// } else {
//   alert( 'Кто здесь?' );
// }


var a = '';
for (var i = 1; i<=7; i++){
    a = a + '#';
    console.log(a);
}
