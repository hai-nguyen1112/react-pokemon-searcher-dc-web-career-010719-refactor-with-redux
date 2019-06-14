import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Card, Image, Button} from 'semantic-ui-react'
import {isEmpty} from 'lodash'
import {votedForPokemonWithThunk} from '../redux/actions'

const PokemonProfile = ({pokemon, onVoteForPokemon, pokemons}) => {
  return (
    <div id="pokemon-profile-page">
      {
        isEmpty(pokemon)
        ?
        null
        :
        <Card>
          <Image src={pokemon.sprites.front} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Card.Header>
            <Card.Meta>
              <span className='date'>{isEmpty(pokemon.types) ? null : pokemon.types.map((type, index) => {
                                                                                                            if (index !== pokemon.types.length - 1) {
                                                                                                              return type.charAt(0).toUpperCase() + type.slice(1) + ", "
                                                                                                            } else {
                                                                                                              return type.charAt(0).toUpperCase() + type.slice(1)
                                                                                                            }
                                                                                                         })}</span>
            </Card.Meta>
            <Card.Description>
              {
                pokemon.stats.map(stat => <span key={stat.name}>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}: {stat.value}<br /></span>)
              }
              <span>Vote: {pokemon.height}</span>
            </Card.Description>
            <br />
            <Link to="/pokemons"><Button>Back</Button></Link>
            <Button onClick={() => onVoteForPokemon(pokemon)}>Vote</Button>
          </Card.Content>
        </Card>
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemons.find(pokemon => pokemon.id === parseInt(ownProps.match.params.id, 10))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVoteForPokemon: pokemon => dispatch(votedForPokemonWithThunk(pokemon))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonProfile))