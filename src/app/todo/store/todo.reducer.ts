import {Item, TodoItem} from '../models/todoItem.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TodoState {
  currentItem?: TodoItem;
  items: TodoItem[];
}

const defaultListItems: TodoItem[] = [
  {
    id: 1,
    text: 'Learn CSS',
    isDone: false
  }, {
    id: 2,
    text: 'Learn JS',
    isDone: false
  }, {
    id: 3,
    text: 'Learn HTML',
    isDone: false
  }, {
    id: 4,
    text: 'If you wont to get smth - do smth',
    isDone: true
  }, {
    id: 5,
    text: 'Integrate Terminal contract from XDC to POS Application',
    isDone: false
  }, {
    id: 6,
    text: 'Drawer sessions refactoring',
    isDone: true
  },
];

const initialtState: TodoState = {
  items: defaultListItems
}

const getTodoFeatureState = createFeatureSelector<TodoState>('todoItems');

export const getTodoItems = createSelector(
  getTodoFeatureState,
  state => state.items
);

export function reducer(state = initialtState, action): TodoState {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = new Item(Date.now(), action.payload, false);
      return {...state, items: [...state.items, ...[newItem]]};
    case 'DELETE_ITEM':
      const newItmeList: TodoItem[] = state.items.filter((item: TodoItem) => item.id !== action.payload.id);
      return {...state, items: newItmeList};
    default:
      return state;
  }
}
