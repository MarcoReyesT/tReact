import {ADD_ITEM} from './types'
//var items = ['asd', 'qweasd', 'drefr']
const initialState = {
  //items: [],
  items: [
    {
      key: '1',
      texto: 'Tarea 1',
      state: false
    },
    {
      key: '2',
      texto: 'Tarea 2',
      state: false
    },
    {
      key: '3',
      texto: 'Tarea 3',
      state: false
    },
  ]
}

function addItemToList(state, item){
  if (item.texto.length < 1) {
    item.texto = "Tarea vacia";
}
  console.log("pushing.....");
  console.log("Nuevo Item:\n");
  console.log(item);
  state.items.push(item);
  console.log("LISTA:\n");
  console.log(state);
  return {
    ...state,
    items: state.items
  }
}

function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_ITEM:
      return addItemToList(state, action.nuevoItem);
    default:
      return state;

  }
}

export default reducer;
