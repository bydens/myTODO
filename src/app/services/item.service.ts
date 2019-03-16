import {TodoItem} from '../models/todoItem.model';
import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter, flatMap, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  // TODO make as an Observable
  private items: Observable<TodoItem[]> = of([
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
  ]);

  public getTodoItems(): Observable<TodoItem[]> {
    return this.items;
  }

  public deleteItem(itemId: number): void {
    // TODO use spread operator?
    // this.items = this.items.filter((item: TodoItem) => item.id !== itemId);
    this.items = this.items.pipe(
        // flatMap(x => x),
        // map((item: TodoItem ) => item.id),
        // filter((id: number) => id !== itemId)
        map((value: TodoItem[]) => value.filter((v: TodoItem) => v.id !== itemId))
    );
  }

  // public addItem(todoItem: TodoItem): void {
  //   this.items.push(todoItem);
  // }
  //
  // public editItem(todoItem: TodoItem): void {
  //   let curItem: TodoItem = this.items.find((item: TodoItem) => item.id === todoItem.id);
  //   curItem = {...curItem, ...todoItem};
  //   this.deleteItem(curItem.id);
  //   this.addItem(curItem);
  // }
}
