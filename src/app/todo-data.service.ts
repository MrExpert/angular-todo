import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todos = [ { title:'clean room', id: 2, completed: false },
  { title:'cook', id: 3, completed: false } ];

  constructor() { }

  getTodos() {
    // console.log(localStorage);
    // return JSON.parse(localStorage.getItem('Todos'));
    // return this.todos = JSON.parse(localStorage.getItem('Todos'));
    return this.todos
  }
   
  addTodo(todo) {
    // return localStorage.setItem('Todos',JSON.stringify(todo));
    // return  this.todos = localStorage.setItem('Todos', todo);
    console.log(this.todos);
    return this.todos.push(todo);
  }
}
