//Actions
import {ADD_ITEM} from './types';

function addItem() {
  return{
    type: ADD_ITEM
  }
}

const actionCreators={
  addItem,
}

export { actionCreators }
