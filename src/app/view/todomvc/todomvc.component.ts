import { Component, OnInit } from '@angular/core';
import { forEach } from '../../../../node_modules/_@angular_router@5.2.2@@angular/router/src/utils/collection';
class todo {
  title: string;
  tip:string;
  id:number;
  constructor(title: string,id:number) {
    this.title = title;
    this.id = id;
    this.tip = "";
  }
};

@Component({
  selector: 'app-todomvc',
  templateUrl: './todomvc.component.html',
  styleUrls: ['./todomvc.component.scss']
})
export class TodomvcComponent implements OnInit {
  TODOS: todo[] = [];
  tempvalue : ''
  constructor() { }
  savevalue() {
    window.localStorage.setItem('todolist', JSON.stringify(this.TODOS));
  }
  mykeyup(event:any){
    if (event.keyCode === 13){
      this.add();
    }
  }
  add(){
    let _name = this.tempvalue;
      let _id = Math.floor(Math.random() * 10000000);
    if (_name){
      let _obj = new todo(this.tempvalue,_id);
      this.TODOS.push(_obj);
      this.tempvalue = '';
      console.log(this.TODOS);
    }
    this.savevalue();
  }
  remove(id){
    this.TODOS.forEach((val,idx,array) => {
      if(val.id==id){
        this.TODOS.splice(idx, 1);
        this.savevalue();
      }
    });
  }
  getinfo(){
    
  }
  ngOnInit() {
    let ifdata = JSON.parse(window.localStorage.getItem('todolist'));
    if(ifdata){
      this.TODOS = ifdata;
    }
  }

}
