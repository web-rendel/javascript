// **** Задачка 1

//var user = {};
//user.name = 'Sergey';
//user.surname = 'Petrov';
//user.name = 'Andrey';
//user.age = 30;
//delete user.name;
//
//console.log(user);

// **** Задачка 2

//var todoList = {};
//
//function isEmpty (obj) {
//    for (var key in obj){
//        return false;
//    }
//    return true;
//}
//console.log( isEmpty(todoList) );
//todoList['homework'] = 'lesson5';
//console.log( isEmpty(todoList) );

// **** Задачка 3

//function summSalary(obj){
//    var result = 0;
//    for (var key in obj){
//        result += obj[key];
//    }
//    return result;
//}
//
//var salaries = {
//    'junior': 1000,
//    'middle': 2500,
//    'senior': 3500,
//    'lead': 5000
//};
//
//console.log(summSalary(salaries));


// **** Задачка 4

//var fruits = ["Яблоко", "Апельсин", "Груша", "Кокос", "Слива"]; 
//function posEL (arr){
//    var id = (arr.length-1);
//    console.log(arr[id]);
//}
//posEL(fruits);


// **** Задачка 5

//var fruits = ["Яблоко", "Апельсин", "Груша", "Кокос", "Слива"];
//function arrEnd (arr, elem){
//    var str = '';
//    str = elem;
//    arr.push(str);
//    console.log(arr);
//}
//arrEnd(fruits, 'Виноград');


// **** Задачка 6

//var fruits = ['apple','orange'];
//fruits.push('kiwi');
//var lenghtArr = fruits.length-2;
//fruits[lenghtArr] = 'pear';
//fruits.shift();
//fruits.unshift('apricot','peach');
//
//console.log(fruits);


// **** Задачка 7

var fruits = ["Яблоко", "Апельсин", "Груша", "Кокос", "Слива"];
function getRandomNum (arr){
    var max = arr.length-1;
    var rand = Math.floor(Math.random() * (max + 1));
    console.log(arr[rand]);
}
getRandomNum(fruits);
