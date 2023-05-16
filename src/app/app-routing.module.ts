import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktListeComponent } from './kontakt-liste/kontakt-liste.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';

const routes: Routes = [
  {
    path:'', component:KontaktListeComponent
  },
  {
    path:'create', component:AddEditContactComponent
  },
  {
    path:'edit/:id', component:AddEditContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
