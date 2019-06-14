import React, {Component} from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import {Route, Redirect, Switch} from 'react-router-dom'
import PokemonProfile from './components/PokemonProfile'
import {connect} from 'react-redux'
import {fetchPokemonsWithThunk} from './redux/actions'
import PokemonEdit from './components/PokemonEdit'

class App extends Component {
  componentDidMount() {
    this.props.onFetchPokemons()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/pokemons/:id/edit" component={PokemonEdit}/>
          <Route path="/pokemons/:id" component={PokemonProfile}/>
          <Route path="/pokemons" component={PokemonIndex}/>
          <Redirect from="*" to="/pokemons"/>
        </Switch>
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
    onFetchPokemons: () => dispatch(fetchPokemonsWithThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
