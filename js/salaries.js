console.log('-------------------------'); 
console.log('Task 4');

/*У нас есть объект, в котором хранятся зарплаты нашей команды: 
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
    Leo: 100,
    Dony: 100,
    Raph: 100,
    Mickey: 90
}

let valArr = Object.values(salaries);
let sum = 0;
for(let i = 0; i <= valArr.length - 1; i++){
    sum = sum + valArr[i];
}

if (Object.keys(salaries).length === 0) {
    sum = 0;
    console.log(sum);
} else{
    console.log(sum);
}
