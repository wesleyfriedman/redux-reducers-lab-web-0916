import React, { Component } from 'react';
import { connect } from 'react-redux';

class IngredientList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      
      </div>
    )
  }
}

function mapStateToPros(state) {
  return {
    ingredients: state.ingredients
  }
}

export default connect(mapStateToPros)(IngredientList)
