import {TodoItem} from '../models/todoItem.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  // TODO make as an Observable
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

  public getTodoItems(): TodoItem[] {
    return this.items;
  }

  public deleteItem(itemId: number): void {
    // TODO use spread operator?
    this.items = this.items.filter((item: TodoItem) => item.id !== itemId);
  }

  public addItem(todoItem: TodoItem): void {
    this.items.push(todoItem);
  }

  public editItem(todoItem: TodoItem): void {
    let curItem: TodoItem = this.items.find((item: TodoItem) => item.id === todoItem.id);
    curItem = {...curItem, ...todoItem};
    this.deleteItem(curItem.id);
    this.addItem(curItem);
  }
}
