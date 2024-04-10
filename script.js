'use strict';

/*var - существует везде
let - существует только тогда, когда код до нее доходит*/

/*alert('Hello World');
prompt('hey');*/

// +prompt - строку в число
// let incr = 10, decr = 26 - в переменной можно перечислять через запятую

// incr++ 
// decr-- - увеличить или уменьшить на единицу

// ++incr - префиксная форма, вернет то, что уже было = 11
// incr++ постфиксная форма возвращает занчение, которое было до перфиксной формы = 10

// % - выведет остаток от деления

// && - логический оператор И. Когда все аргументы являются true

// || - оператор ИЛИ. Когда хотя бы один из аргументов является true

// ! - оператор отрицания. Который обращает значение в обратное - правду в ложь и наоборот

/*'use strict';
console.log(3 + 4 * 5); // 3 + 20*/
// Expected output: 23

//console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

/*let a;


<script src="script.js" t></script>
alert(1)

function pow(x, n) { }
var result = 1;
for (var i = 0: i < n; i++) { }

return result;
var x = promt("x? , "");
var n = promt("n?", "");

if (n < 0) {] }*/



let BudgetMonth = prompt("Ваш бюджет на месяц?", ''),
time = prompt("Введите дату в формате YYYY-MM-DD", '');

let AppData = {
    budget: BudgetMonth,
    datetime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную  статью расходов в этом месяце", ''),
    a4 = prompt("Во солько обойдется?", '');

AppData.expenses.a1 = a2;
AppData.expenses.a3 = a4;
alert(AppData.budget / 30);