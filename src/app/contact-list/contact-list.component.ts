import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Router } from '@angular/router';
import { ContactService } from '../contactService';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  getRowIndexes(): number[] {
    const rowCount = Math.ceil(this.contacts.length / 3);
    return Array(rowCount)
      .fill(0)
      .map((_, index) => index);
  }

  getContactsForRow(rowIndex: number): Contact[] {
    const startIndex = rowIndex * 3;
    return this.contacts.slice(startIndex, startIndex + 3);
  }

  deleteContact(contact: Contact): void {
    if (contact.id != null) {
      this.contactService.deleteContact(contact.id);
    }

    this.router.navigate(['']);
    this.contactService.refreshPage();
  }

  dateConversion(date: Date): string {
    let newDate = new Date(date);
    return newDate.toJSON('T')[0];
  }
}
