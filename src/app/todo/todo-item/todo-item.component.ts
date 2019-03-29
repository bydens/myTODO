import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem, PayloadItem} from '../models/todoItem.model';
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
  @Output() itemUpdate = new EventEmitter<PayloadItem>();

  constructor(private modal: MatDialog, private itemService: ItemService) { }

  ngOnInit() {
  }

  public onDeleteItem(item: TodoItem): void {
    const payload: PayloadItem = {
      type: 'delete',
      item
    }

    this.itemUpdate.emit(payload);
  }

  public openEditItemModal(item: TodoItem) {
    // const dialogRef = this.modal.open(EditModalComponent, {width: '250px', data: item});
    const dialogRef = this.modal.open(EditModalComponent, {data: item});

    dialogRef.afterClosed().subscribe(result => {
      item = {...item, ...{text: result}};

      const payload: PayloadItem = {
        type: 'edit',
        item
      }
      
      this.itemUpdate.emit(payload);
      // this.itemService.editItem(item);
      // console.log('The dialog was closed', result, item);
    });
  }
}
