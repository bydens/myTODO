import {Component, OnInit} from '@angular/core';
import {TodoItem, PayloadItem} from './models/todoItem.model';
import {ItemService} from './services/item.service';
import {Observable, of} from 'rxjs';
import {Store, select} from '@ngrx/store';
import { State } from '../state/app.state';
import { getTodoItems } from './state/todo.reducer';
import * as todoActions from './state/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class ToDoComponent implements OnInit {
  constructor(private itemService: ItemService, private store: Store<State>) {
  }

  public todoItemList:TodoItem[];
  // public todoItemList: Observable<TodoItem[]> = of([]);

  ngOnInit(): void {
    // this.todoItemList = this.itemService.getTodoItems();
    this.store.pipe(select(getTodoItems)).subscribe(
      (todoItemList: TodoItem[]) => this.todoItemList = todoItemList
    );
  }

  public updateItem(payload: PayloadItem): void {
    // this.itemService.deleteItem(item.id);
    switch(payload.type) {
      case 'delete':
        this.store.dispatch(new todoActions.DeleteItem(payload.item));
        break;
      case 'edit':
        this.store.dispatch(new todoActions.EditItem(payload.item));
        break;
      default:
        console.log('Any changes!');
    }
    // this.store.dispatch({
    //   type: 'DELETE_ITEM',
    //   payload: item
    // });
  }

  public addItem(itemText: string): void {
    // this.itemService.addItem(itemText);
    this.store.dispatch(new todoActions.AddItem(itemText))
  }

  // TODO edit item method?
}
