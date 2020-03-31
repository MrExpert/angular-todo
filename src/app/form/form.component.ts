import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoDataService } from '../todo-data.service';
import { Item } from '../models/Item';

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
    // const todo: Item = {
    //   title: JSON.stringify(this.addTodoForm.value.addTodoTitle).slice(1, -1),
    //   id: '101',
    //   completed: false
    // };
    const todo: Item = {
      title: this.addTodoForm.value.addTodoTitle,
      id: '',
      completed: false
    };
    this.todoList.addTodo(todo);
    this.addTodoForm.reset();
    // console.log(todo);
    // localStorage.setItem('Todos', JSON.stringify(todo));
    // console.log(typeof this.todoList.getTodos().push(todo));

  }
  ngOnInit() {
  }

}
