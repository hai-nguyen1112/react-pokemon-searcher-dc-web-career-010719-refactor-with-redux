import React from 'react'
import {Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {postNewPokemonWithThunk} from '../redux/actions'

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onPostNewPokemon(this.props.pokemons, this.state.name, this.state.hp, this.state.frontUrl, this.state.backUrl)
    this.setState({name: "", hp: "", frontUrl:"", backUrl: ""})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostNewPokemon: (pokemons, name, hp, frontUrl, backUrl) => dispatch(postNewPokemonWithThunk(pokemons, name, hp, frontUrl, backUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm)
