'use strict'

let n = prompt('введите время в минутах');
    n = Number(n);
    if (0 < n && n < 15){
        console.log('Первая четверть часа');
    }else if (15 < n && n < 30){
        console.log('Вторая четверть часа');
    }else if (30 < n && n < 45){
        console.log('Третья четверть часа');
    }else if (30 < n && n < 60){
        console.log('Четвертая четверть часа');
    }else{
        console.log('Вы ввели не верное значение!')
    }