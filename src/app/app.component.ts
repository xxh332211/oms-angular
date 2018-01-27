import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isCollapsed = false;
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  hahaha(){
    console.log("hahahahah")
  }
}
