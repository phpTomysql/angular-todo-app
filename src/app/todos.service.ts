import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos() {
	return [{id:1,title:'Milk',completed:false},
	{id:2,title:'Tea',completed:false},
	{id:3,title:'Sugar',completed:true}];
  }
}
