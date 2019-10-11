import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo-grid',
  templateUrl: './todo-grid.component.html',
  styleUrls: ['./todo-grid.component.css']
})
export class TodoGridComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  dataSource: ITodo[] = this.todoService.todoList;

  displayedColumns: string[] = ['date', 'title', 'isDone', 'isDoing',];
  ngOnInit() {
  }

}
