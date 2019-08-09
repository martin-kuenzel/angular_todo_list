import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  amountParam = '?_limit=20';

  constructor(private http: HttpClient) { }

  // getting the todo items from the server
  getTodoItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}${this.amountParam}`);
    
    /*
    // hardcoded DATA
    return [
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
    ];*/
  }

  // adding a new todo item on server
  addTodoItem(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>( this.baseUrl, todo, httpOptions);
  }

  // switching the state of todo item on server
  switchState(todo: Todo): Observable<any> {
    const url = `${this.baseUrl}/${todo.id}`;
    return this.http.put( url, todo, httpOptions);
  }

  // deleting a todo item on server
  /*
    this will not be run,
    because we deactivate angular-crashcourse-todolist/src/app/components/todo/todo.component.ts::deleteTodoItem(todo: Todo)}
  */
  deleteTodoItem(todo: Todo): Observable<any> {
    const url = `${this.baseUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions );
  }
}
