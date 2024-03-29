import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {changedFilterValue} from '../redux/actions'

const PokemonFilter = ({onFilterChange, filterValue}) => {
  let filterOptions = [
    {
      key: 1,
      text: "All",
      value: "all"
    },
    {
      key: 2,
      text: "Water",
      value: "water"
    },
    {
      key: 3,
      text: "Fire",
      value: "fire"
    },
    {
      key: 4,
      text: "Grass",
      value: "grass"
    }
  ]
  return (
    <div>
      Filter:&nbsp;&nbsp;
      <Dropdown
        placeholder={filterValue.charAt(0).toUpperCase() + filterValue.slice(1)}
        search
        selection
        options={filterOptions}
        onChange={onFilterChange}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filterValue: state.filterValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: (e, {value}) => dispatch(changedFilterValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFilter)
