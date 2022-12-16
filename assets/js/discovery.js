
const bttOption = document.getElementById('discovery__option__icon');
const divPlus = document.getElementById('discovery__plus');
console.log(bttOption);
console.log(divPlus);
let showPlus = false;


let inputSearch = document.getElementById('discovery__plus__search__form__input'); 
const bttSearch = document.getElementById('discovery__plus__search__form__icon');

const divTypes = document.getElementById('discovery__plus__types');

// ---------------------------------------------------------------------

// >>>>>>>>> Exibir e Ocultar Tipos com botão Filtro
bttOption.addEventListener('click', function(e) {
    if(!showPlus) {
        divPlus.classList.remove("oculto");
        divPlus.classList.add("animate__fadeIn");
        showPlus = true;
    }else {
        divPlus.classList.remove("animate__fadeIn");
        divPlus.classList.add("oculto");
        showPlus = false;
    }
})

divTypes.childNodes.forEach(typeRadio => {
    typeRadio.addEventListener('click', function(e) {
        const selectedType = e.target.innerHTML;

        if (selectedType) {
            console.log('tipo selecionado');
            console.log(selectedType);

            pokeApi.getPokemonByType(selectedType).then((pokemons = [])=> {
                const newHtml = pokemons.map(convertPokemonToLi).join('')
                listaPokemon.innerHTML = newHtml
            })
        }
    })
})
// >>>>>>>>> Procurar Pokemon
//const input = document.querySelector("#my-input");

function searchPokemon() {
    let objInputSearch = document.getElementById('discovery__plus__search__form__input').value; 
    console.log(objInputSearch);
}

bttSearch.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('botão pesquisar')
    searchPokemon();
})

// inputSearch.addEventListener('keyup', function(e) {
//     e.preventDefault();
//     let tecla = e.key;
//     if (tecla === "Enter") {
//         console.log("Ativou o Enter!")
//         searchPokemon();
//     }
// })