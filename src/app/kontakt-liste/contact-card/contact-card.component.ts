import { Component } from '@angular/core';
import { Contact } from '../kontakt-liste/contact-card';
import { Contacts } from '../mock-contacts';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  deleteContact(contact: Contact): void {
    let index = Contacts.indexOf(contact);
    Contacts.splice(index, 1);
  }
}
