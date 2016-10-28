import React, { Component } from 'react';
import IngredientList from './ingredient_list'
import SubmissionBox from './Submission_box'

export default class App extends Component {
  debugger
  render() {
    return (
      <div>
        <SubmissionBox />
        <IngredientList />
      </div>
    );
  }
}
