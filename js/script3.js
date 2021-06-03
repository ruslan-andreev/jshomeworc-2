'use strict'

let nombers = prompt('введите шесть цифр'),
    nom1 = +nombers[0] +  +nombers[1] +  +nombers[2],
    nom2 = +nombers[3] +  +nombers[4] +  +nombers[5];
if(nom1 == nom2){
    console.log('да');
} else{
    console.log('нет');
}   
