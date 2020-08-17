const lang = ['ru', 'en'];

let DayWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let DayWeekEn = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

let array = [
    ['ru', 'en'], 
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
]

let question =  prompt('Выберите язык!');

if ( question === lang[0]) {
    console.log(DayWeekRu);
} else {
    console.log(DayWeekEn);
}

switch (question) {
    case 'ru':
        console.log(DayWeekRu);
        break;
    case  'en': 
        console.log(DayWeekEn);
       break;
}

if ( question ===  array[0][0])
    console.log(array[1]);
else {
    console.log(array[2]);
}
      
let namePerson = prompt('Введите имя' );

let name = ( namePerson = 'Артем' ) ? 'директор' : 
( namePerson = 'Максим' ) ? 'преподаватель' :
'студент';
console.log(name);

