console.log('-------------------------'); 
console.log('Task 2');

/*Создайте объект с днями недели. Ключами в нем 
должны служить номера дней от начала 
недели (понедельник - первый и т.д.). 
Выведите на экран текущий день недели.*/

let number = prompt('Введіть номер дня тижня числом');
let week = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday',
}

while(number < 1 || number > 7 || isNaN(number) || number === null) {
    if(number === null){
        console.log('Скасовано!');
        break;
    }
    console.log('Помилка. Введіть номер дня тижня числом');
    number = prompt("Введіть номер дня тижня числом");
}

if(number >= 1 && number <= 7){
    number = Math.floor(number);
    console.log(week[number]);
}
