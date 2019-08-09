import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItems: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodoItems().subscribe( ret => {
      this.todoItems = ret;
    });
  }

  deleteTodoItem(todo: Todo) {
    // this is just for emulation because we can not really delete data on the currently used server
    this.todoItems = this.todoItems.filter( x => x.id !== todo.id );
    return 'Success';

    // this would be the real deletion action
    this.todoService.deleteTodoItem(todo).subscribe( ret => {
        console.log(ret);
    });
  }
}
