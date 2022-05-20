 function num(a, b){
  if ( a< b) return -1;
  if (a>b) return 1;
  if (a==b) return 0;
 }
 alert(num(prompt('a'),prompt('b')));
 
function factorial(n) {
return (n != 1) ? n * factorial(n - 1) : 1;
}
const n = Number(prompt("число"));
alert( factorial(n) );

function number(k,l,m)  { 
  let e = +(''+k+l+m);
  return e;
  } 
alert(number(prompt('k'),prompt('l'),prompt('m')));

  const x = Number(prompt("довжина"));
  const y = Number(prompt("ширина"));
  let s = true;
  
  function areaRectangle(s){
    if ( x>0 , y>0 ) {
      alert ( x * y );
    } else if ( x>0 , y<=0) {
      alert ( x * x );
    } else if (x<=0 , y>0) {
      alert ( y * y );
    }
  }
  alert(areaRectangle(s));