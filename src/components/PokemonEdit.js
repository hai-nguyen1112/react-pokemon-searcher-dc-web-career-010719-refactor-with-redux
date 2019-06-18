import React, {Component} from 'react'
import {Card, Image, Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {isEmpty} from 'lodash'
import {editPokemonWithThunk} from '../redux/actions'

class PokemonEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: isEmpty(props.pokemon) ? "" : props.pokemon.name,
      types: isEmpty(props.pokemon) ? [] : props.pokemon.types
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      name: props.pokemon.name,
      types: props.pokemon.types
    })
  }

  handleChangeName = e => {
    this.setState({name: e.target.value})
  }

  handleChangeType = e => {
    this.setState({types: e.target.value.split(" ")})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.props.pokemon, this.state.name, this.state.types)
    this.props.history.push(`/pokemons/${this.props.pokemon.id}`)
  }

  render() {
    let types = this.state.types.join(" ")
    return (
      <div id="pokemon-edit-page">
      {
        isEmpty(this.props.pokemon)
        ?
        null
        :
        <Card>
          <Image src={this.props.pokemon.sprites.front} wrapped ui={false}/>
          <Card.Content>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Field>
                <label>Name</label>
                <input value={this.state.name} type="text" name="name" onChange={e => this.handleChangeName(e)}/>
              </Form.Field>
              <Form.Field>
                <label>Type</label>
                <input value={types} type="text" name="types" onChange={e => this.handleChangeType(e)}/>
              </Form.Field>
              <Link to={`/pokemons/${this.props.pokemon.id}`}><Button>Cancel</Button></Link>
              <Button type='submit'>Submit</Button>
            </Form>
          </Card.Content>
        </Card>
      }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemons.find(pokemon => pokemon.id === parseInt(ownProps.match.params.id, 10))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (pokemon, name, types) => dispatch(editPokemonWithThunk(pokemon, name, types))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonEdit))
