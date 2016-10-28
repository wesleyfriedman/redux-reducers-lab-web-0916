import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from '../actions';

class SubmissionBox extends Component {
  constructor(props) {
    super(props);

    this.state = { ingredient: '' }

  }

  handleChange(event) {
    this.setState({ingredient: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addIngredient(this.state.ingredient);
    this.setState({ ingredient: ''})
  }

  render() {
    return (
          <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>Add an Ingredient</h4>
            <input
              value={this.state.ingredient}
              onChange={this.handleChange.bind(this)} />
        <div>
          <button action="submit">Add Ingredient</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(SubmissionBox);
