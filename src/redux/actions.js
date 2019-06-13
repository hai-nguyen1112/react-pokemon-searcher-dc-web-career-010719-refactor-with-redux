function fetchPokemonsWithThunk() {
  return dispatch => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => {
      dispatch(fetchedPokemonsWithThunk(pokemons))
    })
  }
}

function fetchedPokemonsWithThunk(pokemons) {
  return {
    type: "POKEMONS_WERE_FETCHED",
    payload: pokemons
  }
}

function changedSearchTerm(text) {
  return {
    type: "SEARCHTERM_WAS_CHANGED",
    payload: text
  }
}

function postNewPokemonWithThunk(pokemons, name, hp, frontUrl, backUrl) {
  return dispatch => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        stats: [{}, {}, {}, {}, {}, {value: hp, name: 'hp'}],
        sprites: {
          front: frontUrl,
          back: frontUrl
        },
        types: ["grass"]
      })
    }).then(res => res.json())
      .then(newPokemon => {
        dispatch(postedNewPokemonWithThunk(pokemons, newPokemon))
      })
  }
}

function postedNewPokemonWithThunk(pokemons, newPokemon) {
  let newPokemons = [...pokemons]
  newPokemons.push(newPokemon)
  return {
    type: "NEW_POKEMON_WAS_POSTED",
    payload: newPokemons
  }
}

function changedSortValue(value) {
  return {
    type: "SORT_VALUE_WAS_CHANGED",
    payload: value
  }
}

function changedFilterValue(value) {
  return {
    type: "FILTER_VALUE_WAS_CHANGED",
    payload: value
  }
}

export {fetchPokemonsWithThunk, changedSearchTerm, postNewPokemonWithThunk, changedSortValue, changedFilterValue}
