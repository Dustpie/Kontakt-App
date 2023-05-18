import { Component, Input } from '@angular/core';
import { Contact } from '../../contact';
import { __param } from 'tslib';
import { ContactService } from 'src/app/contactService';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() contact: any;

  constructor(private contactService: ContactService) {}

  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact);
  }
}
