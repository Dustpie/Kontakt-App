import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktListeComponent } from './kontakt-liste/kontakt-liste.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactCardComponent } from './kontakt-liste/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktListeComponent,
    AddEditContactComponent,
    ContactCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
