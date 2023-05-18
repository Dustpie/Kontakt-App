import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactList } from './contact-list/kontakt-liste.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactList,
  },
  {
    path: 'create',
    component: AddEditContactComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
