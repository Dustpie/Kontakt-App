import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactCardComponent } from './contact-list/contact-card/contact-card.component';
import { ContactList } from './contact-list/kontakt-liste.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactList,
    AddEditContactComponent,
    ContactCardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
