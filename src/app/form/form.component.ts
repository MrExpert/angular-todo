import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor( private todoList: TodoDataService) { }
  addTodoForm = new FormGroup({
    addTodoTitle : new FormControl(''),
  });

  onSubmit() {
    const todo = {
      title: JSON.stringify(this.addTodoForm.value.addTodoTitle).slice(1,-1),
      id: Math.floor(Math.random()*100),
      completed: false
    }
    this.todoList.addTodo(todo);
    this.addTodoForm.reset();
    // console.log(todo);
    // localStorage.setItem('Todos', JSON.stringify(todo));
    // console.log(typeof this.todoList.getTodos().push(todo));
    
  }
  ngOnInit() {
  }

}
