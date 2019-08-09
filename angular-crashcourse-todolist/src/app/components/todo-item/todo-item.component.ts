import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodoItem: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      'todo-item': true,
      'is-done': this.todo.isDone
    }

    return classes;
  }

  // Switching the checkbox on an item
  onSwitchState(todo) {
    // input in UI
    todo.isDone = todo.isDone ? false : true;
    // input on Server
    this.todoService.switchState(todo).subscribe( ret => {
      console.log(ret);
    });
  }

  // Deleting an item
  onDelete(todo) {
    // delete in UI
    console.log(todo)
    // delete on Server
    this.deleteTodoItem.emit(todo);
  }

}
