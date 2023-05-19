import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Contacts } from '../mock-contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = Contacts;

  ngOnInit(): void {}

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
    let index = Contacts.indexOf(contact);
    Contacts.splice(index, 1);
  }
}
