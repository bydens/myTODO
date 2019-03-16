import {Component, OnInit} from '@angular/core';
import {TodoItem} from './models/todoItem.model';
import {ItemService} from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  public todoItemList: TodoItem[] = [];

  ngOnInit(): void {
    this.todoItemList = this.itemService.getTodoItems();
  }

}
