import {combineReducers} from 'redux'

const pokemonsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "POKEMONS_WERE_FETCHED":
      return action.payload
    case "NEW_POKEMON_WAS_POSTED":
      return action.payload
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
