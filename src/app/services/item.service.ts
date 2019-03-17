import {Item, TodoItem} from '../models/todoItem.model';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private items: TodoItem[] = [
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

  private $items = new BehaviorSubject<TodoItem[]>(this.items);

  public getTodoItems(): Observable<TodoItem[]> {
    return this.$items;
  }

  public deleteItem(itemId: number): void {
    this.items = [...this.items.filter((item: TodoItem) => item.id !== itemId)];
    this.$items.next(this.items);
  }

  public addItem(text: string): void {
    // TODO use spread operator
    const newItem = new Item(Date.now(), text, false);
    this.items = [...this.items, ...[newItem]];
    this.$items.next(this.items);
  }

  public editItem(todoItem: TodoItem): void {
    let curItem: TodoItem = this.items.find((item: TodoItem) => item.id === todoItem.id);
    curItem = {...curItem, ...todoItem};
    // this.deleteItem(curItem.id);
    // this.addItem(curItem.text);
  }
}
