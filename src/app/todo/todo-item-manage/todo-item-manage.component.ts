import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {TodoItem} from '../models/todoItem.model';

@Component({
  selector: 'app-todo-item-manage',
  templateUrl: './todo-item-manage.component.html',
  styleUrls: ['./todo-item-manage.component.scss']
})

export class TodoItemManageComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }
  @Input() currentItem: TodoItem;
  @Output() addEditItem = new EventEmitter<string>();

  public btnTitle: string = 'Add';

  public manageItemForm = this.fb.group({
    itemText: ['', [Validators.required, this.validWords.bind(this)]]
  });

  private listErrorWords: string[] = [
      'fuck'
  ];

  ngOnInit() {
    if (this.currentItem) {
      this.manageItemForm.patchValue({
        itemText: this.currentItem.text
      });

      this.btnTitle = 'Edit';
    }
  }

  private validWords(control: FormControl) {
    if (control.value.includes(this.listErrorWords)) {
      return {
        errorWords: true
      };
    }
    return null;
  }

  public manageItem(): void {
    const formValue = this.manageItemForm.value;

    if (!formValue.itemText) {
      return;
    }

    this.addEditItem.emit(formValue.itemText);

    this.manageItemForm.patchValue({
      itemText: ''
    });

  }
}
