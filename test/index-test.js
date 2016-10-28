import expect from 'expect';
// import { shallow } from 'enzyme';
import { ADD_INGREDIENT } from '../src/actions/types';
import ingredientReducer from '../src/reducers/index';



describe('ingredient reducer', () => {
    it('can handle unknown actions', () => {
      expect(ingredientReducer()).toEqual({});
    })
})
