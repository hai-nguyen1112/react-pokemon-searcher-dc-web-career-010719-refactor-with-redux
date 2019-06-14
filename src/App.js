import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import PokemonProfile from './components/PokemonProfile'
import {connect} from 'react-redux'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/pokemons/:id" component={PokemonProfile}/>
      <Route exact path="/pokemons" component={PokemonIndex}/>
      <Route exact path="/" render={() => <Redirect to="/pokemons"/>}/>
      <Redirect from="*" to="/"/>
    </Switch>
  </div>
)

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  }
}

export default withRouter(connect(mapStateToProps)(App))
