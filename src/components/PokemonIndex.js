import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import {Search} from 'semantic-ui-react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {changedSearchTerm} from '../redux/actions'
import PokemonSort from './PokemonSort'
import PokemonFilter from './PokemonFilter'

class PokemonPage extends React.Component {
  componentDidMount() {
    this.props.onSearchTermChange("")
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <Search onSearchChange={_.debounce(() => this.props.onSearchTermChange(document.querySelectorAll("input")[0].value), 500)} showNoResults={false} placeholder={this.props.searchTerm === "" ? "Search By Name..." : this.props.searchTerm}/>
        <br />
        <PokemonSort />
        <br />
        <PokemonFilter />
        <br />
        <PokemonCollection />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchTermChange: text => dispatch(changedSearchTerm(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
