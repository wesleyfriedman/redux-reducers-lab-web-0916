export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [
        ...state, action.payload
      ]
    case 'REMOVE_INGREDIENT':
      const removal = state.splice(action.payload, 1)
      return state
    default:
      return state
  }
}
