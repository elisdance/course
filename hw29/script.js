const car = {
    madeBy : 'Porche',
    model : 'Panamera',
    year : '2021',
    averageSpead : '140',
    fuelTank : '70',
    fuelConsumption : '12',
    driver : 'Anton',
  }
  
  function first () {
    for ( let key in car) {
      console.log(`${key} = ${car[key]}`); 
    }
  }
  console.log(first());
  
  function second(){
    car.driver2 = prompt("Ім'я нового водія");
      for ( let key in car) {
        console.log(`${key} = ${car[key]}`);
    }
  }
  console.log(second());
  
  function third () {
    n = prompt('введіть кількість літрів');
    const m = 55;
    console.log('Вартість заправки '+ m * n + 'грн');
  }
  console.log(third());
  
  function fourth () {
    let distance = prompt('введіть відстань');
    const hours = distance /car.averageSpead;
        if (hours % 4 === 0) {
        return hours + Math.floor((hours - 1) / 4);
      }
    return hours + Math.floor(hours / 4);
  }
  console.log(fourth());
  
  function fifth() {
    let name = prompt('Імя водія');
    if(name ===car.driver ){
      console.log('водій має право їхати');
    }else if ( name === car.driver2){
      console.log('водій має право їхати');
    }else{
      console.log('водій не має право їхати');
    }
  }
  console.log(fifth());
  
  function sixth(){
    let distance = prompt('введіть відстань');
    const remainder = (distance/100)*fuelConsumption;
    if(remainder<=70){
      console.log('бензина вистачить');
    }else{
      console.log('бензина не вистачить');
    }
  }
  console.log(sixth());
  