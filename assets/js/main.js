const pokemonList = document.getElementById('pokemonList')
const botaoNext = document.getElementById('next')
const botaoPrev = document.getElementById('prev')
const limit = 20
let offset = 0
let pagina = 1

function changePokemonPage(offset, limit) {
    function convertPokemonToLi(pokemon) {
        return `
            <li class="pokemon ${pokemon.mainType}">
                <span class="numero">#${pokemon.id}</span>
                <span class="nome">${pokemon.name}</span>
    
                <div class="detalhes">
                    <ol class="tipos">
                        ${pokemon.types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                </div>
            </li>
        `
    }
    
    
    //substitui o "for" pelo map (que cria uma lista de itens) e depois junta tudo com o "join('')" sem espaçamento
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
    })
}

changePokemonPage(offset, limit)

botaoNext.addEventListener('click', () => {
    pagina++
    offset += limit
    changePokemonPage(offset, limit)
    document.getElementById('paginaAtual').innerHTML = `Page ${pagina}`
})

botaoPrev.addEventListener('click', () => {
    if (offset >= 20){
        pagina--
        offset -= limit
        changePokemonPage(offset, limit)
        document.getElementById('paginaAtual').innerHTML = `Page ${pagina}`
    }
})



