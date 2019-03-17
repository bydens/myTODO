import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-item-manage',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }
  @Output() addItem = new EventEmitter<string>();

  newItemForm = this.fb.group({
    itemText: ['', [Validators.required, this.validWords.bind(this)]]
  });

  private listErrorWords: string[] = [
      'fuck'
  ];

  ngOnInit() {
  }

  private validWords(control: FormControl) {
    if (control.value.includes(this.listErrorWords)) {
      return {
        'errorWords': true
      };
    }
    return null;
  }

  public addNewItem(): void {
    const formValue = this.newItemForm.value;
    if (!formValue.itemText) {
      return;
    }

    this.addItem.emit(formValue.itemText);

    this.newItemForm.patchValue({
      itemText: ''
    });

  }
}
