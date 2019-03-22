import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../models/todoItem.model';
import {EditModalComponent} from '../share/modal/edit-modal/edit-modal.component';
import {MatDialog} from '@angular/material';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() idItemDelete = new EventEmitter<number>();

  constructor(private modal: MatDialog, private itemService: ItemService) { }

  ngOnInit() {
  }

  public onDeleteItem(itemId: number): void {
    this.idItemDelete.emit(itemId);
  }

  public openEditItemModal(item: TodoItem) {
    // const dialogRef = this.modal.open(EditModalComponent, {width: '250px', data: item});
    const dialogRef = this.modal.open(EditModalComponent, {data: item});

    dialogRef.afterClosed().subscribe(result => {
      item = {...item, ...{text: result}};
      this.itemService.editItem(item);
      console.log('The dialog was closed', result, item);
    });
  }
}
