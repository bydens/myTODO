import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TodoItem} from '../../../models/todoItem.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TodoItem) {}

  // constructor() { }
  // constructor(private modal: MatDialogRef<EditModalComponent>, @Inject(MAT_DIALOG_DATA) public data: TodoItem) { }

  ngOnInit() {
  }

  // public updateItem(itemText: string) {
  //   console.log(itemText);
  // }
}
