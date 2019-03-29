import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todoItem.model';

export enum TodoActionTypes {
    DeleteItem = '[Todo] Delete Item from Todo List',
    AddItem = '[Todo] Add Item to List',
    EditItem = '[Todo] Edit Item',
    InitializeTodoList = '[Todo] Initialize Todo Item List'
}

export class DeleteItem implements Action {
    readonly type = TodoActionTypes.DeleteItem;

    constructor(public payload: TodoItem) {}
}

export class AddItem implements Action {
    readonly type = TodoActionTypes.AddItem;

    constructor(public payload: string) {}
}

export class EditItem implements Action {
    readonly type = TodoActionTypes.EditItem;

    constructor(public payload: TodoItem) {}
}

export class InitializeTodoList implements Action {
    readonly type = TodoActionTypes.InitializeTodoList;
}

export type TodoActions = DeleteItem
    | AddItem
    | EditItem
    | InitializeTodoList;