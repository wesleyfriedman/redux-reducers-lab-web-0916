import React, { Component } from 'react';
import IngredientList from './ingredient_list'
import SubmissionBox from './Submission_box'

export default class App extends Component {
  render() {
    return (
      <div className='col-md-4 col-md-offset-4'>
        <SubmissionBox />
        <IngredientList />
      </div>
    );
  }
}
