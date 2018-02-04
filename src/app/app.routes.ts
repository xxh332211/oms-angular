import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { SayholloComponent } from './view/sayhollo/sayhollo.component';
import { TodomvcComponent } from './view/todomvc/todomvc.component';
const routes: Routes = [
    { path: 'showcase', component: ShowcaseComponent },
    { path: 'sayhollo', component: SayholloComponent },
    { path: 'todomvc', component: TodomvcComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }