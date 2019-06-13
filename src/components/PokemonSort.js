import React from 'react'
import {connect} from 'react-redux'
import {changedSortValue} from '../redux/actions'
import {Form, Radio} from 'semantic-ui-react'

const PokemonSort = ({sortValue, onSortValueChange}) => {
  return (
    <div>
      <Form>
        <Form.Field>
          <Radio
            label="Sort By Id"
            name="sortGroup"
            value="byId"
            checked={sortValue === "byId"}
            onChange={onSortValueChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Sort By Name"
            name="sortGroup"
            value="byName"
            checked={sortValue === "byName"}
            onChange={onSortValueChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Sort By HP"
            name="sortGroup"
            value="byHP"
            checked={sortValue === "byHP"}
            onChange={onSortValueChange}
          />
        </Form.Field>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sortValue: state.sortValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSortValueChange: (e, {value}) => dispatch(changedSortValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSort)
