 // Задание 1

let name = prompt('Меня зовут'),
    age = prompt('Мне __ лет'),
    city = prompt('Я проживаю в городе'),
    company = prompt('Я работаю в компании'), 
    phone = prompt('Мой номер телефона'),
    email = prompt('Моя электронная почта');

document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

/* // Задание 2

if (age < 100) {
    document.write(`${name } родился в ${2021-age} году`)
} else {
    document.write(`Какой интересный возраст`)
}  */
/* 
// Задание 3

let a = prompt('Введите a'),
    b = prompt('Введите b'),
    c = prompt('Введите c'),
    d = prompt('Введите d'),
    e = prompt('Введите e'),
    f = prompt('Введите f');

if (a + b + c == d + e + f) {
    alert('Да');
} else {
    alert('Нет');
} */

/* // Задание 4

let h = 1;
//let h = 0;
//let h = -3;

if (h > 0) {
    alert('Верно');
} else {
    alert('Неверно');
}
 */
/* // Задание 5

let j = 10,
    k = 2,
    l= j +k;

alert('Сумма ' + l);
alert('Разность ' + (j-k));
alert('Произведение ' + (j*k));
alert('Частное ' + (j/k));

if (l > 1) document.write('Квадрат суммы ' + (l**2));

// Задание 6

if (j > 2 && j < 11 || k >= 6 && k < 14) {
    alert('Верно');
} else {
    alert('Неверно');
} */

// Задание 7
/* 
let n = prompt('Ввведите n');

switch(true){
    case n >= 0 && n <= 15:
        alert('Первая четверть')
    break;
    case n >= 16 && n <= 30:
        alert('Вторая четверть')
    break;
    case n >= 31 && n <= 45:
        alert('Третья четверть')
    break;
    case n >= 46 && n <= 59:
        alert('Четвертая четверть')
    break;
    default:
        alert('Неверное значение');
}
 */
 // Задание 8

/* let day = prompt('Ввведите день');

if (day >= 1 && day <= 9) {
    alert('Первая декада');
} else if (day >= 10 && day <= 19) {
    alert('Вторая декада');
} else if (day >= 20 && day <= 31) {
    alert('Третья декада');
} */
 
//Задание 9

/* let sut = prompt('Введите количество суток'),
years = sut / 365,
months = sut / 31,
weeks = sut / 7,
hours = sut * 24,
min = sut * 1440,
sec = sut * 86400;

if (sut < 365) {
  alert('Меньше года');
} else {
    document.write(` ${years} лет`)
}

if (sut < 31) {
    alert('Меньше месяца');
} else {
    document.write(` ${months} месяцев`)
}

if (sut < 7) {
    alert('Меньше недели');
} else {
    document.write(` ${weeks} недель`)
}

document.write(` ${hours} часов`)
document.write(` ${min} минут`)
document.write(` ${sec} секунд`) */

// Задание 10

/* let mon=0;

switch(true){
    case day <=31:
        mon=1;
        alert('январь');
    break;
    case day <=59:
        mon=2;
    alert('февраль')
    break;
    case day <= 90:
        mon=3;
        alert('март');
    break;
    case day <= 120:
        mon=4;
        alert('апрель');
    break;
    case day <= 151:
        mon=5;
        alert('май');
    break;
    case day <= 181:
        mon=6;
        alert('июнь');
    break;
    case day <= 212:
        mon=7;
        alert('июль');
    break;
    case  day <= 243:
        mon=8;
        alert('август');
    break;
    case day <= 273:
        mon=9;
        alert('сентябрь');
    break;
    case day <= 304:
        mon=10;
        alert('октябрь');
    break;
    case day <= 334:
        mon=11;
        alert('ноябрь');
    break;
    case day <= 365:
        mon=12;
        alert('декабрь');
    break;
}

switch (mon) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
    break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
    break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
    break;
    case 9:
    case 10:
    case 11:
        alert('Зима');
    break;
    default:
        alert('неверное значение');
}  */