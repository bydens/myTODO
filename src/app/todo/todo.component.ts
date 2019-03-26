import {Component, OnInit} from '@angular/core';
import {TodoItem} from './models/todoItem.model';
import {ItemService} from './services/item.service';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class ToDoComponent implements OnInit {
  constructor(private itemService: ItemService, private store: Store<any>) {
  }

  public todoItemList: Observable<TodoItem[]> = of([]);

  ngOnInit(): void {
    this.todoItemList = this.itemService.getTodoItems();
  }

  public deleteItem(id: number) {
    this.itemService.deleteItem(id);
    this.store.dispatch({
      type: 'DELETE_ITEM',
      payload: id
    });
  }

  public addItem(itemText: string): void {
    this.itemService.addItem(itemText);
  }

  // TODO edit item method?
}
