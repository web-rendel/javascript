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

//var fruits = ["Яблоко", "Апельсин", "Груша", "Кокос", "Слива"];
//function getRandomNum (arr){
//    var max = arr.length-1;
//    var rand = Math.floor(Math.random() * (max + 1));
//    console.log(arr[rand]);
//}
//getRandomNum(fruits);


// **** Задачка 8

//var fruits = ["Яблоко", "Апельсин", "Груша", "Кокос", "Слива"];
//function getFind(arr, value){
//        for(var i = 0; i<arr.length; i++){
//            if (arr[i] === value) return i;
//        }
//        return -1;
//}
//console.log(getFind(fruits, 'Апельсин'));

// **** Задачка 9

//var arrNum = [5, 7, 4, 8, 3, 0];
//
//function filterRange(arr, min, max){
//    for (var i = 0; i < arr.length; i++) { 
//        if(arr[i] >= min && arr[i] <= max){
//            console.log(arr[i]);
//        }
//
//    }
//}
//filterRange(arrNum, 6, 8);


// ***homework***

// **** Задание 1

//var tasksCompleted = {
//    'Anna': 29,
//    'Serg': 235,
//    'Elena': 1,
//    'Anton': 245
//};
//var max = 0;
//var maxName = "";
//for (var name in tasksCompleted) {
//
//    if (max < tasksCompleted[name]) {
//        max = tasksCompleted[name];
//        maxName = name;
//    }
//}
//console.log(maxName );

// **** Задание 2


//var image = {
//    width: 100,
//    height: 400,
//    title: 'Cool image'
//};
//
//function multiplyNumeric (obj){
//    var result = 0;
//    for (var num in obj) {
//        //return obj;
//        if (typeof(obj[num]) === 'number'){
//            result = obj[num] * 2;
//
//        }
//        console.log(result);
//    }
//}
////console.log(multiplyNumeric(image));
//multiplyNumeric(image);

//var menu = {
//    width: 200,
//    height: 300,
//    title: "My menu"
//};

//function multiplyNumeric(obj) {
//    for (var key in obj) {
//        if (typeof(obj[key]) == 'number') {
//            obj[key] *= 2;
//        }
//    }
//}

//multiplyNumeric(menu);

//console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );


// **** Задание 3

var array = [];
var usernumber = prompt('Введите число');

array.push(usernumber);

alert(array);