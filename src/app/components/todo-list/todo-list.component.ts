import { Component, OnInit , Input ,Output,EventEmitter } from '@angular/core';
import Todo from "../../models/Todo";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

// accpet prop value
@Input() todos:Todo[] = [];

// create event for emit from child to parent

@Output() markToDo = new EventEmitter();

@Output() deleteToDo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  markTodo(todo:Todo):void {
  	this.markToDo.emit(todo);
  }

  deleteTodo(id:number):void {
  	this.deleteToDo.emit(id);
  }

}
