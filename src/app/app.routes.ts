import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowcaseComponent } from './view/showcase/showcase.component';

const routes: Routes = [
    { path: 'showcase', component: ShowcaseComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }