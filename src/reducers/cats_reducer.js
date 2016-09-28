export default function catsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CATS':
      return action.payload;
    case 'ADD_CAT':
      return [...state, action.payload[0]]
    default:
      return state;
  }
};
