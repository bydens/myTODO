import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../models/todoItem.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() idItemDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public onDeleteItem(itemId: number): void {
    this.idItemDelete.emit(itemId);
  }

}
