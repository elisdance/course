const button = document.querySelector('button')

async function getValue() {
	const input = document.querySelector('input')
  const finish = document.querySelector('.result') 
	let url = `https://api.themoviedb.org/3/movie/550?api_key=faae534785ff4a4a49a16e29c4e795c5&query=${input.value}}`;
	
	let response =  fetch(url);

	let {Search} =  response.json();
  
  Search.forEach(el => {
  	finish.innerHTML = finish.innerHTML + `<p>${el.Title}</p>`
  })}
