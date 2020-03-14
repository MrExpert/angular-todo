import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  todos = []; 

  constructor( private todoList: TodoDataService ) { }

  ngOnInit() {
    this.todos = this.todoList.getTodos();
    //console.log(typeof this.todos);
  }

}
