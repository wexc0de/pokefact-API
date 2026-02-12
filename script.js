async function getData() {
  const response = await fetch('https://pokefacts.vercel.app/');
  const data = await response.json();
  console.log(data);
  pokefact.textContent = data.data
}
getData()
const pokefact = document.querySelector('#fact')
const button = document.querySelector('#pkrfact');
button.addEventListener('click', getData);