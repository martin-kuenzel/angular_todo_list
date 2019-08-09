import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

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
  onInput(todo) {
    todo = todo.isDone ? false : true;
  }

  // Deleting an item
  onDelete(todo) {
    console.log(todo)
  }

}
