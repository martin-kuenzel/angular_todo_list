import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  @Output() addTodoItem: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.title)
    const todo = {
      title: this.title,
      isDone: false
    };

    this.addTodoItem.emit(todo);
  }



}
