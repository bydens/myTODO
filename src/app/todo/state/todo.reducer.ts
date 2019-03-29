import {Item, TodoItem} from '../models/todoItem.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoActions, TodoActionTypes } from './todo.actions';
import { text } from '@angular/core/src/render3';

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

export function reducer(state = initialtState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.AddItem:
    // TODO move to component or service
      const newItem = new Item(Date.now(), action.payload, false);
      return {...state, items: [...state.items, ...[newItem]]};
    case TodoActionTypes.DeleteItem:
      const newItmeList: TodoItem[] = state.items.filter((item: TodoItem) => item.id !== action.payload.id);
      return {...state, items: newItmeList};
    case TodoActionTypes.EditItem:
      const editItmeList: TodoItem[] = state.items.filter((item: TodoItem) => item.id !== action.payload.id);
      editItmeList.push(action.payload);
      return {...state, items: editItmeList};
    default:
      return state;
  }
}
