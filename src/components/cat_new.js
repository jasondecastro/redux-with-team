import React from 'react'
import * as actions from '../actions/index'
// import {fetchCats} from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CatNew extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.actions.addCat(this.refs.name.value, this.props.cats.length)
    this.refs.name.value = ''
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>New Cat</h1>
        <input type="text" ref="name" placeholder="Name" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state) {
  return {cats: state.cats}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(CatNew);



// export default connect(mapDispatchToProps)(CatNew)

// this component should render a form for a new cat 
// when user submits a form, we should dispatch an action. type: 'ADD_CAT', payload: 'new cat's name
// this should go through cats reducer which will add this new cat to state 
// all the components should re-render, so cats index will show new cat

// MAYBE this CatNew compnent can't be a functional component

// this.props.store.dispatch({some action})