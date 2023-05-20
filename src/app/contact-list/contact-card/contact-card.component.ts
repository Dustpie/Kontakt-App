import { Component, Input } from '@angular/core';
import { Contact } from '../../contact';
import { __param } from 'tslib';
import { ContactService } from 'src/app/contactService';
import { Contacts } from 'src/app/mock-contacts';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() contact!: Contact;

  constructor(private contactService: ContactService) {}

  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact);
  }
}
