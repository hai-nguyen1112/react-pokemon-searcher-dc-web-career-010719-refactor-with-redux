import React from 'react'
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle: 'front'
    }
  }

  handleToggle = () => {
    this.state.toggle === 'front' ? this.setState({toggle: 'back'}) : this.setState({toggle: 'front'})
  }

  render() {
    return (
        <Card onMouseOver={this.handleToggle}>
          <div>
            <div className="image">
              {
                this.state.toggle === 'front'
                ?
                <Link to={`/pokemons/${this.props.pokemon.id}`}>
                  <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front}/>
                </Link>
                :
                <Link to={`/pokemons/${this.props.pokemon.id}`}>
                  <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.back}/>
                </Link>
              }
            </div>
            <div className="content">
              <div className="header">{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {this.props.pokemon.stats[5].value} hp
              </span>
            </div>
          </div>
        </Card>
    )
  }
}

export default PokemonCard
