console.log('-------------------------'); 
console.log('Task 3');

/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?*/

const obj = {}

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEmpty(obj));

// Сам об'єкт змінити можна, а змінну, якій ми через const присвоїли об'єкт - ні.