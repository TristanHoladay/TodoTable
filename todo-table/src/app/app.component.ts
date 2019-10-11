import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

 ngOnInit() {

 }

}