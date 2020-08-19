'use strict'

let data = new Date();
let DayWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let dayWeek = DayWeekRu[data.getDay() - 1 ];
let day = data.getDate();

let fullData = data.toLocaleString('ru', { year: 'numeric', month: 'long',day: 'numeric'});
let shortData = data.toLocaleString('ru', { year: 'numeric', month: 'numeric',day: 'numeric'});
let time = data.toLocaleString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
let hour = data.getHours();
let minute = data.getMinutes();
let second = data.getSeconds();

const addZero = (n) => { n < 10 ? '0'+ n : n;}

const addText = (n) =>
 { 
     ( n > 4 && n < 21 ) ? 'ов' : '';
     ( n >= 1  && n <= 4 ) ? 'а' : '';

    };

const task = () => { 

    console.log('Сегодня ' + dayWeek  + ', '+ fullData + ', ' + hour + 
            ' час' + `${addText(hour)}` + minute + ' минуты ' + second + ' секунд' );
    console.log(shortData + ' - ' + time );
 }

setInterval(  1000);






