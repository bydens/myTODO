import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todoItem.model';

export enum TodoActionTypes {
    DeleteItem = '[Todo] Delete Item from Todo List'
}

export class DeleteItem implements Action {
    readonly type = TodoActionTypes.DeleteItem;

    constructor(public payload: TodoItem) {}
}

export type TodoActions = DeleteItem;