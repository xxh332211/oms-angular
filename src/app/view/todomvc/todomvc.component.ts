import { Component, OnInit } from '@angular/core';
class tempobj {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
};

@Component({
  selector: 'app-todomvc',
  templateUrl: './todomvc.component.html',
  styleUrls: ['./todomvc.component.scss']
})
export class TodomvcComponent implements OnInit {
  todo: {};
  tempvalue : ''
  constructor() { }
  setTempvalue(value) {
    
  }
  add(){
    let _name = this.tempvalue;
    if (_name && !this.todo[this.tempvalue]){
      let _obj = new tempobj(this.tempvalue);
      this.todo[this.tempvalue] = _obj;
      console.log(this.todo);
    }
    
  }
  ngOnInit() {
    
  }

}
