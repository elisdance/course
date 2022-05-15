const age = prompt('Введіть ваш вік:');
if (age <= 11){
    alert("Дитина");
} else if (age <= 17){
    alert("Підліток");
} else if (age <= 59){
    alert("Дорослий");
} else if (age >= 60  , age <100){
    alert("Пенсіонер");
} else {
    alert('У нас так довго не живуть')

}
const num = prompt('Введіть число від 0 до 9:');
if (num == 0){
    alert(")");
} else if (num == 1){
    alert("!");
} else if (num == 2){
    alert('@');
} else if (num == 3){
    alert('#');
} else if (num == 4){
    alert('$');
} else if (num == 5){
    alert('%');
} else if (num == 6){
    alert('^');
} else if (num == 7){
    alert('&');
} else if (num == 8){
    alert('*');
} else if (num == 9){
    alert('(');
} else {
    alert('помилка');
}
let begin = Number(prompt("Введіть початок діапазона:"));
let end = Number(prompt("Введіть кінець діапазона:"));
let sum =0;
while (begin<=end){
    
    sum+=begin;
    begin++;
}
alert(sum);
let a = Number(prompt("Перше число"));
let b = Number(prompt("Друге число"));
let gcd;
while (a != b){
    if (a>b){
        a =a-b;
    }
    else{
        b=b-a;
    }
    
}
gcd = a;
alert(gcd);
let divisor = Number(prompt('Число'));
n =[];
for (let i = 1; i <= divisor;i++ ){
    if (divisor % i==0)
        n.push(i);
}
alert(n);
