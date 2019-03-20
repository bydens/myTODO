import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../models/todoItem.model';
import {EditModalComponent} from '../share/modal/edit-modal/edit-modal.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() idItemDelete = new EventEmitter<number>();

  constructor(private modal: MatDialog) { }

  ngOnInit() {
  }

  public onDeleteItem(itemId: number): void {
    this.idItemDelete.emit(itemId);
  }

  public openEditItemModal(item: TodoItem) {
    const dialogRef = this.modal.open(EditModalComponent, {width: '250px', data: item});
    // const dialogRef = this.modal.open(DialogOverviewExampleDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  // selector: 'dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Hi</h1>`,
})
export class DialogOverviewExampleDialogComponent {
  constructor() {}

  // constructor(
  //   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  //
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
