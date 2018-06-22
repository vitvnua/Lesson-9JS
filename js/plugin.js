// ***** первая часть задач *****
// ***** №1 *****

//getBigName(userName); // закомментировал так как ошибка мешает дальнейшему выводу

function getBigName(name) {
    name = name + "";
    return name.toUpperCase();
}
let userName = "Ivan";

console.log(getBigName(userName)); //выведет ошибку userName is not defined так как переменная еще не определена


// ***** №2 *****

function test() {
    let name2 = "Vasiliy";
    return getBigName2(userName2);
}
function  getBigName2(name2) {
    name2 = name2 + "";
    return name2.toUpperCase();
}

let userName2 = "Ivan";

console.log(test()); //вернет Ivan так как переменная userName и функция находятся в глобальном лексическом окружении


// ***** №3 *****

let food = "cucumber";
(function () {
    let food = "bread";
    getFood();
})();
function getFood() {
    console.log(food);
}
// Функция getFood выведет cucumber, потому что функция getFood() находятся в глобальном лексическом окружении так же как и фунгция food


// ***** вторая часть задач *****
// ***** №1 *****

let dollar,
    getDollar;
(function() {
    let dollar = 0;
    getDollar = function() {
        return dollar;
    }
}());
dollar = 30;
console.log(getDollar()); // функция getDollar выведет 0 потому что в самой функции нету переменной dollar и тогда она переходит в лексическое окружения самовызывающейся функции находит там эту переменную и выводит значения


// ***** №2 *****

let greet = "Hello";
(function() {
    let text = "World";
    console.log(greet + text); // вернет текст HelloWorld так как переменные text и greet определены
}());

// console.log(greet + text); // будет ошибка так как переменную text не видно в глобальном лексическом окружении


// ***** №3 *****

function minus(x){
    x = typeof Number(x) !== 'number' ?  0 : Number(x);
    return function(y) {
        y = typeof Number(x) !== 'number' || !y ?  0 : Number(y);
        return !x ? y : x - y;
    }
}
console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)(0));
console.log(minus()(6));
console.log(minus()());


// ***** №4 *****

function MultiplyMaker (a) {
    let c = a;
    return function(b) {
        c *=  b;
        return c;
    }
}

const multiply = MultiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));


// ***** №5 *****

let stringMetod = (function() {

    let string;

    function initString(value) {
        value = !value ? '' :
            typeof value == 'number' ? String(value) : value;
        string = value;
    }

    function getString () {
        return string;
    }

    function lenghtString() {
        return string.length;
    }
    function reverseString() {
        string = string.split('').reverse().join('');
    }

    return {
        setString: initString,
        getString: getString,
        getStringLen: lenghtString,
        stringReverse: reverseString
    };
})();

stringMetod.setString('abcde');
console.log(stringMetod.getString());
console.log(stringMetod.getStringLen());
stringMetod.stringReverse();
console.log(stringMetod.getString());


// ***** №6 *****

const calculator = (function () {
    let number;

    function setNumb(value) {
        number = value;
        return this;
    }

    function addNumb(value) {
        number += value;
        return this;
    }

    function multiNumb(value) {
        number *= value;
        return this;
    }

    function minusNumb(value) {
        number -= value;
        return this;
    }

    function divisionNumb(value) {
        number /= value;
        return this;
    }

    function degreeNumb(value) {
        number = Math.pow(number, value);
        return this;
    }

    function getNumberResult() {
        return Math.floor(number);
    }

    return {
        setNumb,
        addNumb,
        multiNumb,
        minusNumb,
        divisionNumb,
        degreeNumb,
        getNumberResult
    }

}());

calculator.setNumb(2);
calculator.addNumb(5);
console.log(calculator.getNumberResult());

calculator.multiNumb(2);
calculator.minusNumb(1);
console.log(calculator.getNumberResult());

calculator.divisionNumb(2);
calculator.degreeNumb(2);
console.log(calculator.getNumberResult());

console.log(calculator.setNumb(10).degreeNumb(2).getNumberResult());

