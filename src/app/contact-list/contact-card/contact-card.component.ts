import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { Contacts } from '../../mock-contacts';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  contacts: Contact[] = Contacts;

  deleteContact(contact: Contact): void {
    let index = Contacts.indexOf(contact);
    Contacts.splice(index, 1);
  }
}
