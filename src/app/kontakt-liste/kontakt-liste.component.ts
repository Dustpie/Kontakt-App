import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Contacts } from '../mock-contacts';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kontakt-liste',
  templateUrl: './kontakt-liste.component.html',
  styleUrls: ['./kontakt-liste.component.scss']
})
export class KontaktListeComponent implements OnInit {
  contacts : Contact[] = Contacts;
  
  ngOnInit(): void {
  
  }

  
  deleteContact(contact: Contact): void {
    let index = Contacts.indexOf(contact);
    Contacts.splice(index, 1);
  }
}
