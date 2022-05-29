let shopList = [
    { productName:'Шоколадка', amount : 2, bought : 'придбано', price : 35,},
    { productName:'Яблуко', amount : 15, bought : 'не придбано', price : 5,},
    { productName:'Молоко', amount : 1, bought : 'придбано', price : 63,},
    { productName:'Груша', amount : 12, bought : 'не придбано', price : 6,},
  ]
  
  console.log(shopList);
  
  const sorted_list = shopList.slice().sort(function sortProduct (a, b) {
    if (a.bought=='придбано' && b.bought=='не придбано') {
      return 1;
    }
    if (a.bought=='не придбано' && b.bought=='придбано') {
      return -1;
    }
    return 0; 
  });
  
  console.log(sorted_list);
  
  let tovar = prompt('Що хочете придбати ?');
  
  const new_shopList = shopList.map(function productPurchase(a){
      const a_copy = {...a};
    if( tovar == a_copy.productName){
      if(a_copy.bought == 'не придбано'){
        Object.defineProperty(a_copy, "bought",  {value : "придбано"}); 
      }
    }return a_copy;
  })
  
  console.log(new_shopList);
  
  const unpurchasedList = shopList.map(function lastList(a){
    const a_copy = {...a};
    if(a_copy.bought == 'не придбано')
    return a_copy;
  })
  console.log(unpurchasedList);