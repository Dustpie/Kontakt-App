import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContact() {
    let arrayFromLocalStorage = localStorage.getItem('contacts');
    let contacts;
    if (arrayFromLocalStorage != null) {
      const contacts = JSON.parse(arrayFromLocalStorage);
    }
    return contacts;
  }

  addContact(): void {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  deleteContact(contact: Contact): void {
    let arrayFromLocalStorage = localStorage.getItem('contacts');

    if (arrayFromLocalStorage != null) {
      contacts === JSON.parse(arrayFromLocalStorage);
    }
    let index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
