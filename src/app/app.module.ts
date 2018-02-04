import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { AppRoutingModule } from './app.routes';
import { SayholloComponent } from './view/sayhollo/sayhollo.component';
import { TodomvcComponent } from './view/todomvc/todomvc.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    SayholloComponent,
    TodomvcComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }