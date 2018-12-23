import {ADD_ITEM} from './types'
var items = ['asd', 'qweasd', 'drefr']
const initialState = {
  //items: [],
}

function addItemToList(state, item){
  items.push(item);
  return {
    ...state,
    items,
  }
}

function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_ITEM:
      return state;
      //return addItemToList(state);
    default:
      return state;

  }
}

export default reducer;
