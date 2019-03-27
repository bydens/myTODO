import {Component, OnInit} from '@angular/core';
import {TodoItem} from './models/todoItem.model';
import {ItemService} from './services/item.service';
import {Observable, of} from 'rxjs';
import {Store, select} from '@ngrx/store';
import { State } from '../state/app.state';
import { getTodoItems } from './store/todo.reducer';

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

  public deleteItem(item: TodoItem) {
    this.itemService.deleteItem(item.id);
    this.store.dispatch({
      type: 'DELETE_ITEM',
      payload: item
    });
  }

  public addItem(itemText: string): void {
    this.itemService.addItem(itemText);
  }

  // TODO edit item method?
}
