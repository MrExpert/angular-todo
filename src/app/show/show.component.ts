import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Item } from '../models/Item';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  todos: Item[];
  editState = false;
  itemToEdit: Item;

  constructor( private todoList: TodoDataService ) { }

  editTodoForm = new FormGroup({
    editTodoTitle : new FormControl(''),
  });

  ngOnInit() {
    // this.todos = this.todoList.getTodos();
    // console.log(typeof this.todos);
    this.todoList.getItems().subscribe(items => { this.todos = items;  });
  }

  deleteTodo(event, todo) {
    this.todoList.deleteItem(todo);
  }

  editTodo(event, todo) {
    this.editState = true;
    this.itemToEdit = todo;
  }
  cancelEdit(event, todo){
    this.editState = false;
  }

  updateItem(event, todo: Item) {
    todo.title = this.editTodoForm.value.editTodoTitle;
    this.todoList.updateItem(todo);
    this.editState = false;
  }
}
