import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { SayholloComponent } from './view/sayhollo/sayhollo.component';
import { TodomvcComponent } from './view/todomvc/todomvc.component';
import { PagenotfoundComponent } from './view/pagenotfound/pagenotfound.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/sayhollo',
        pathMatch: 'full'
    },
    { path: 'showcase', component: ShowcaseComponent },
    { path: 'sayhollo', component: SayholloComponent },
    { path: 'todomvc', component: TodomvcComponent },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }