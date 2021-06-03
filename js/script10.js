'use stict'

let month;

if(1< day && day <=31){
    month = 'Январь';
    console.log('Январь');
}else if(31< day && day <= 59){
    month = 'Февраль';
    console.log('Февраль');
}else if(59 < day <= 90){
    month = 'Март';
    console.log('Март');
}else if(90 < day <= 121){
    month = 'Апрель';
    console.log('Апрель');
}else if(121 < day <= 152){
    month = 'Май';
    console.log('Май');
}else if(152 < day <= 182){
    month = 'Июнь';
    console.log('Июнь');
}else if(182 < day <= 213){
    month = 'Июль';
    console.log('Июль');
}else if(213 < day <= 244){
    month = 'Август';
    console.log('Август');
}else if(244 < day <= 274){
    month = 'Сентябрь';
    console.log('Сентябрь');
}else if(274 < day <= 305){
    month = 'Октябрь';
    console.log('Октябрь');
}else if(305 < day <= 335){
    month = 'Ноябрь';
    console.log('Ноябрь');
}else if(335 < day <= 365){
    month = 'Ноябрь';
    console.log('Ноябрь');
}else{
    console.log('Значение больше года')
}

switch(month){
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        console.log('Зима');
    break;
    case 'Март':
    case 'Апрель':
    case 'Май':
        console.log('Весна');
    break;      
    case 'Июнь':
    case 'Июль':
    case 'Август':
        console.log('Лето');
    break;
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        console.log('Осень');
    break;
}
