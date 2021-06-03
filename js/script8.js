'use strict'

let day = prompt('Введите число месяца');
    day = Number(day);

    if(1 <= day && day <= 10){
        console.log('Первая декада месяца')
    }else if(11 <= day && day <= 20){
        console.log('Вторая декада месяца')
    }else if(21 <= day && day <= 31){
        console.log('Третья декада месяца')
    }else{
        console.log('Ответ смотреть в "scrit10"')
    }