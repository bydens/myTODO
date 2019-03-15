import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../models/todoItem.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
