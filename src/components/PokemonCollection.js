import React from 'react'
import PokemonCard from './PokemonCard'
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux'

const PokemonCollection = props => {
  let pokemons = props.pokemons.filter(pokemon => pokemon.name.includes(props.searchTerm.toLowerCase()))
  if (props.sortValue === "byName") {
    pokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name))
  } else if (props.sortValue === "byHP") {
    pokemons = pokemons.sort((a, b) => a.stats[5].value - b.stats[5].value)
  } else {
    pokemons = pokemons.sort((a, b) => a.id - b.id)
  }
  if (props.filterValue === "grass") {
    pokemons = pokemons.filter(pokemon => pokemon.types.includes("grass"))
  } else if (props.filterValue === "fire") {
    pokemons = pokemons.filter(pokemon => pokemon.types.includes("fire"))
  } else if (props.filterValue === 'water') {
    pokemons = pokemons.filter(pokemon => pokemon.types.includes("water"))
  }
  let pokemonCards = pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
    )
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    searchTerm: state.searchTerm,
    sortValue: state.sortValue,
    filterValue: state.filterValue
  }
}

export default connect(mapStateToProps)(PokemonCollection)
