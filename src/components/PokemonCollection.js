import React from 'react'
import PokemonCard from './PokemonCard'
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchPokemonsWithThunk} from '../redux/actions'

class PokemonCollection extends React.Component {
  componentDidMount() {
    this.props.onFetchPokemons()
  }

  render() {
    let pokemons = this.props.pokemons.filter(pokemon => pokemon.name.includes(this.props.searchTerm.toLowerCase()))
    if (this.props.sortValue === "byName") {
      pokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.props.sortValue === "byHP") {
      pokemons = pokemons.sort((a, b) => a.stats[5].value - b.stats[5].value)
    }
    if (this.props.filterValue === "grass") {
      pokemons = pokemons.filter(pokemon => pokemon.types.includes("grass"))
    } else if (this.props.filterValue === "fire") {
      pokemons = pokemons.filter(pokemon => pokemon.types.includes("fire"))
    } else if (this.props.filterValue === 'water') {
      pokemons = pokemons.filter(pokemon => pokemon.types.includes("water"))
    }
    let pokemonCards = pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonCards}
      </Card.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    searchTerm: state.searchTerm,
    sortValue: state.sortValue,
    filterValue: state.filterValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPokemons: () => dispatch(fetchPokemonsWithThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCollection)
