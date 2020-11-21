import { Component, OnInit } from '@angular/core';
// interface
import Todo from "../../models/Todo";
// service
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  todos: Todo[] = []; // interface
 
  // depandancy injection
  constructor(private _todosServices:TodosService) { }

  // mounted hooks
  ngOnInit(): void {
  	this.todos = this._todosServices.getTodos();
  }

  // method for create new todo
  newTodo( item:string ):void {

  	if(item =='') return;

  	let max = this.todos.reduce((pre:Todo,cur:Todo) => {
  		return pre.id > cur.id ? pre : cur;
  	});

  	let newID = max.id+1;

  	this.todos.push({
  		id:newID,
  		title:item,
  		completed:false
  	});
  	
  }

 // method for mark todo as completed
  markTodo( todo:Todo ):void {
  	this.todos = this.todos.map(tdo=>{
  		if(todo.id == tdo.id) {
  			tdo.completed = !tdo.completed;
  		}
  		return tdo;
  	})
  }

  // method for remove todo from list
  deleteTodo(id:number):void {
  	this.todos = this.todos.filter(todo=> todo.id!==id);
  }
}
