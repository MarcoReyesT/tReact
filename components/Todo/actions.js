//Actions
import {ADD_ITEM} from './types';

function addItem() {
  return{
    type: ADD_ITEM,
    nuevoItem: item
  }
}

const actionCreators={
  addItem,
}

export { actionCreators }
