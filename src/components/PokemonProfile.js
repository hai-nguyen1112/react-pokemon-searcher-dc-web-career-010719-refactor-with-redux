import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Card, Image, Button} from 'semantic-ui-react'
import {isEmpty} from 'lodash'

const PokemonProfile = ({pokemon}) => {
  let stats
  if (!isEmpty(pokemon) && !isEmpty(pokemon.stats[0])) {
    stats = pokemon.stats.map(stat => <span key={stat.name}>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}: {stat.value} <br /></span>)
  }
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
              <span className='date'>{pokemon.types.map((type, index) => {
                                                                            if (index !== pokemon.types.length - 1) {
                                                                              return type.charAt(0).toUpperCase() + type.slice(1) + ", "
                                                                            } else {
                                                                              return type.charAt(0).toUpperCase() + type.slice(1)
                                                                            }
                                                                        })}</span>
            </Card.Meta>
            <Card.Description>
              {stats}
              <br />
              <Link to="/pokemons"><Button>Back</Button></Link>
            </Card.Description>
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

export default withRouter(connect(mapStateToProps)(PokemonProfile))
