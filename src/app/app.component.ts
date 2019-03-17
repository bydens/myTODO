import {Component, OnInit} from '@angular/core';
import {TodoItem} from './models/todoItem.model';
import {ItemService} from './services/item.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(private itemService: ItemService) {
  }

  public todoItemList: Observable<TodoItem[]> = of([]);

  ngOnInit(): void {
    this.todoItemList = this.itemService.getTodoItems();
  }

  public deleteItem(id: number) {
    this.itemService.deleteItem(id);
  }

  public addItem(itemText: string): void {
    this.itemService.addItem(itemText);
  }

}
