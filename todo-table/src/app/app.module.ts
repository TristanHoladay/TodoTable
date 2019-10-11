import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { TodoComponent } from './todo/todo.component';
import { TodoGridComponent } from './todo-grid/todo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    TodoComponent,
    TodoGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatTableModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

