const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="numero">#001</span>
            <span class="nome">${pokemon.name}</span>

            <div class="detalhes">
                <ol class="tipos">
                    <li class="tipo">Grama</li>
                    <li class="tipo">Veneno</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

//substitui o "for" pelo map (que cria uma lista de itens) e depois junta tudo com o "join('')" sem espaçamento
pokeApi.getPokemons().then((pokemons) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
    })