import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts() {
    let dataFromStorage = localStorage.getItem('contacts');
    if (dataFromStorage != null) {
      let parsedData = JSON.parse(dataFromStorage);
      return parsedData;
    }
  }

  setContacts(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  addContacts(contact: Contact): void {
    let allContacts = this.getContacts();
    allContacts.push(contact);
    this.sortContacts(allContacts);
    localStorage.setItem('contacts', JSON.stringify(allContacts));
  }

  deleteContact(id: number): void {
    let allContacts = this.getContacts();

    allContacts.splice(id, 1);
    console.log(allContacts);
    this.sortContacts(allContacts);
    localStorage.setItem('contacts', JSON.stringify(allContacts));
  }

  sortContacts(allContacts: Contact[]) {
    for (let i = 0; i < allContacts.length; i++) {
      let contact = allContacts[i];
      contact.id = i;
    }
  }
  refreshPage() {
    window.location.reload();
  }
}
