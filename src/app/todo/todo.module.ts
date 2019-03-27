import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {EditModalComponent} from './share/modal/edit-modal/edit-modal.component';
import {ToDoComponent} from './todo.component';
import {ItemService} from './services/item.service';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/todo.reducer';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    StoreModule.forFeature('todoItems', reducer)
  ],
  declarations: [
    ToDoComponent,
    TodoItemComponent,
    TodoFormComponent,
    EditModalComponent
  ],
  entryComponents: [EditModalComponent],
  providers: [ItemService],
  exports: [ToDoComponent]
})
export class TodoModule {
}
