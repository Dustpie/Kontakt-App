import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Contacts } from '../mock-contacts';

@Component({
  selector: 'app-kontakt-liste',
  templateUrl: './kontakt-liste.component.html',
  styleUrls: ['./kontakt-liste.component.scss'],
})
export class ContactList implements OnInit {
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
