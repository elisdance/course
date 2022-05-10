user_name = prompt("Введіть своє ім'я ", "");
alert('Привіт '+ user_name);

userAge = prompt("Введіть свій рік народження: ","");
alert('Ваш вік: '+(2022 - userAge));

const sideLength = prompt("Впишіть довжину сторони квадрата: ","");
alert('Периметр = '+ (4 * sideLength));

const radius = prompt('Впишіть радіус: ','');
alert('Площа = '+(Math.PI * Math.pow(radius, 2) ));

const displacement = prompt('Впишіть відстань між двома містами: ','');
const time = prompt('Впишіть час, за який Ви хочете здолати шлях: ','');
alert(' Швидксть, з якою потрібно рухатися = '+(displacement / time));

const euro = 0.95 ;
const dollars = prompt('Впишіть суму в $, яку хочете перевести в € ','');
alert('Сума в євро:'+ (dollars * euro)+ '€');


