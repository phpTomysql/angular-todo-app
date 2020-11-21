import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // local state for the component
  todoTitle:string = '';

 // create event for emit from child and listen at parent
  @Output() addTodo = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // local method of component to emit data to parent
  newTodo():void {
  	this.addTodo.emit(this.todoTitle);
  	this.todoTitle = '';
  }
}
