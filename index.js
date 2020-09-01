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

const addZero = (n) => { 
  
  let text = n < 10 ? '0'+ n : n;
  return text;
}

const addDeclension = (n) =>
 { 
    let text = ( n > 4 && n <= 20) ? 'ов' :  
               ( n === 1 || n === 21) ? '' : 'a';
                return text;
    };

const taskA = () => { 

    document.getElementsByTagName('h1')[0].textContent = ( 'Сегодня ' + dayWeek  + ', '+ fullData + ', ' + hour + 
            ' час' + `${addDeclension(hour)} ` + minute + ' минуты ' + second + ' секунд' );    
 }

const taskB = () => {

    document.getElementsByTagName('h1')[1].innerHTML = ( shortData + ' - ' + time );
}

setInterval( taskA, 1000 );
setInterval( taskB, 1000 );






