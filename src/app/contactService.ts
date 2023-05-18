import { Injectable } from '@angular/core';
import { Contacts } from './mock-contacts';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  contacts: Contact[] = Contacts;

  getContact() {
    let arrayFromLocalStorage = localStorage.getItem('contacts');

    if (arrayFromLocalStorage != null) {
      this.contacts = JSON.parse(arrayFromLocalStorage);
    }
    return this.contacts;
  }

  addContact(): void {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  deleteContact(contact: Contact): void {
    let arrayFromLocalStorage = localStorage.getItem('contacts');

    if (arrayFromLocalStorage != null) {
      this.contacts === JSON.parse(arrayFromLocalStorage);
    }
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
