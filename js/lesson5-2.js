
var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) { 
    console.log( 'Вам сообщение ' + arr[i] ); 
}