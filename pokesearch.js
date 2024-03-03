const searchInput =  document.getElementById('search');
const searchBttn = document.querySelector('button');
const display = document.getElementById('results');

let searchText = '';

let pokemon ;

async function fetchPokemon(text){
await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`).then(res=>{
    console.log('response is', res);
     return res.json()
}).then(data =>{
    console.log('data is', data);
    pokemon = JSON.stringify(data);
    displayData();
})
.catch(err=>{
    console.log('error is ', err)
})
};

searchInput.addEventListener('input', (e)=>{
    searchText = e.target.value;
    console.log('e.target.value', e.target.value);
})

searchBttn.addEventListener('click', (e)=>{
    fetchPokemon(searchText);
});

function displayData(){
display.innerText = pokemon;
};