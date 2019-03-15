import {Component, OnInit} from '@angular/core';
import {TodoItem} from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  public todoItemList: TodoItem[] = [];

  ngOnInit(): void {
    this.todoItemList = [
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
  }

}
