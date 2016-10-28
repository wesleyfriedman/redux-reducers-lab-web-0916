import React from 'react';
import { connect } from 'react-redux';

const IngredientList = (props) => {
  const ingredients = props.ingredients.map((ingredient, idx) =>
    <li key={idx}>{ingredient}</li>)
  return (
    <div>
      <ul>
        {ingredients}
      </ul>
    </div>

  )

}


function mapStateToPros(state) {
  return { ingredients: state }
}

export default connect(mapStateToPros)(IngredientList)
