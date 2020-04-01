import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  todos: Item[];

  constructor( private todoList: TodoDataService ) { }

  ngOnInit() {
    // this.todos = this.todoList.getTodos();
    // console.log(typeof this.todos);
    this.todoList.getItems().subscribe(items => { this.todos = items;  });
  }

  deleteTodo (event, todo) {
    this.todoList.deleteItem(todo);
  }

}
