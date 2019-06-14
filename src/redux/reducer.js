import {combineReducers} from 'redux'

const pokemonsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "POKEMONS_WERE_FETCHED":
      return action.payload
    case "NEW_POKEMON_WAS_POSTED":
      return action.payload
    case "POKEMON_WAS_VOTED":
      return oldState.map(pokemon => {
        if (pokemon.id === action.payload.id) {
          pokemon.height = pokemon.height + 1
        }
        return pokemon
      })
    default:
      return oldState
  }
}

const searchTermReducer = (oldState="", action) => {
  switch (action.type) {
    case "SEARCHTERM_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const sortValueReducer = (oldState="byId", action) => {
  switch (action.type) {
    case "SORT_VALUE_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const filterValueReducer = (oldState="all", action) => {
  switch (action.type) {
    case "FILTER_VALUE_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  searchTerm: searchTermReducer,
  sortValue: sortValueReducer,
  filterValue: filterValueReducer
})

export default rootReducer
