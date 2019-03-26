import {Item} from '../models/todoItem.model';

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = new Item(Date.now(), action.payload, false);
      return [...state, ...[newItem]];
    case 'DELETE_ITEM':
      console.log('existing state', JSON.stringify(state));
      console.log('action payload', action.payload);
      const newItmeList = state.filter(item => item.id !== action.payload);
      return [...newItmeList];
    default:
      return state;
  }
}
