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

    // this will change the Items in the UI
    this.todoItems = this.todoItems.filter( x => x.id !== todo.id );
    
    // this is just for emulation because we can not really delete data on the currently used server
    return 'Success';

    // this would be the real deletion action 
    this.todoService.deleteTodoItem(todo).subscribe( ret => {
        this.todoItems = this.todoItems.filter( x => x.id !== todo.id );
        console.log(ret);
    });
  }

  // this is the add action
  addTodoItem(todo: Todo) {
    this.todoItems.push( todo );

    // this is just for emulation because we can not really add data on the currently used server
    return 'Success';
    
    this.todoService.addTodoItem(todo).subscribe( ret => {
    
      // this will change the Items in the UI
        this.todoItems.push( todo );
        console.log(ret);

    });
  }
}
