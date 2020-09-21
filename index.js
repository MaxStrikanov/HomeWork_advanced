'use strict'

const getArgument = (elem) => {
    let str = elem.trim();
    if (typeof(str) !== 'string'){
        alert('Аргумента не строка');
    }
    
    if(elem.length > 30){
      str = elem.slice(30)
    let  str2 = elem.replace(str, '...')
        console.log(str2 );
    }
   
}

getArgument('Функция, вызываемая для создания новой подстроки')
