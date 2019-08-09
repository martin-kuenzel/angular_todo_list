import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItems: Todo[];

  constructor() { }

  ngOnInit() {
    this.todoItems = [
      {
        id: 0,
        title: 'todo 1',
        content: 'this is the content',
        isDone: false
      },
      {
        id: 1,
        title: 'todo 2',
        content: 'this is the content',
        isDone: false
      },
      {
        id: 2,
        title: 'todo 3',
        content: 'this is the content',
        isDone: false
      },
    ];
  }

}
