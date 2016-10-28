import expect from 'expect';

import { ADD_INGREDIENT } from '../src/actions/types';
import ingredientReducer from '../src/reducers/index';



describe('ingredient reducer', () => {
    it('can handle unknown actions', () => {
      expect(ingredientReducer(undefined, [])).toEqual([]);
    })

    it('handles ADD_INGREDIENT action', () => {
      const action = { type: ADD_INGREDIENT, payload: 'grapes' }
      expect(ingredientReducer([], action)).toEqual(['grapes']);
    })
})
