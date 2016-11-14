import React, { Component } from 'react';

export const Ingredient = (props) => {
  return (
    <li
      className='row'
      onClick={props.onIngredientClick}>
      {props.ingredient}
    </li>
  )
}
