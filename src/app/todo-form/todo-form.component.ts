import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-item-manage',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() addItem = new EventEmitter<string>();

  public itemText: string;

  constructor() {
  }

  ngOnInit() {
  }

  public addNewItem(text: string): void {
    if (!text) {
      return;
    }

    this.addItem.emit(text);
    this.itemText = '';
  }
}
