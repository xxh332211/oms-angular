import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuclass = 'menuopen';
  isCollapsed = false;
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.menuclass = 'menuclose';
    } else {
      this.menuclass = 'menuopen';
    }
  }
}
