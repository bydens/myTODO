import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {TodoModule} from './todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    TodoModule,
    BrowserModule,
    StoreModule.forRoot( {})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
