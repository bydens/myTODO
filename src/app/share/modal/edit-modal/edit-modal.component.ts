import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TodoItem} from '../../../models/todoItem.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditModalComponent>, @Inject(MAT_DIALOG_DATA) public item: TodoItem) {}

  ngOnInit() {
  }

  public updateItem(itemText: string) {
    this.dialogRef.close(itemText);
  }
}
