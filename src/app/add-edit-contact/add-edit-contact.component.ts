import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Contacts } from '../mock-contacts';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss'],
})
export class AddEditContactComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {}

  contact: Contact = {
    id: 0,
    name: 'Dennis',
    birthDate: new Date('2023-08-23'),
    addresses: [],
  };

  contactForm: FormGroup = this.formbuilder.group({
    id: null,
    name: [
      null,
      Validators.compose([Validators.required, Validators.minLength(2)]),
    ],
    birthDate: [null, Validators.required],
    addresses: this.formbuilder.array([
      this.formbuilder.group({
        street: [
          null,
          Validators.compose([Validators.required, Validators.minLength(4)]),
        ],
        houseNumber: [null, Validators.required],
        zip: [null, Validators.required],
        town: [
          null,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        country: [
          null,
          Validators.compose([Validators.required, Validators.minLength(4)]),
        ],
      }),
    ]),
  });

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      let contactById = Contacts.find((x) => x.id == id)!;
      this.contact = contactById;

      const addressArray = this.contact.addresses.map((address) => {
        return this.formbuilder.group({
          street: [
            address.street,
            [Validators.required, Validators.minLength(4)],
          ],
          houseNumber: [address.houseNumber, Validators.required],
          plz: [address.zip, Validators.required],
          town: [address.town, [Validators.required, Validators.minLength(3)]],
          country: [
            address.country,
            [Validators.required, Validators.minLength(4)],
          ],
        });
      });

      console.log(addressArray);

      this.contactForm.setValue({
        id: this.contact.id,
        name: this.contact.name,
        birthDate: this.dateConversion(this.contact.birthDate),
        addresses: this.formbuilder.array(addressArray),
      });
    } else {
      this.contact.id = Contacts.length;
      this.contact.name = '';
      this.contact.birthDate = new Date('yyyy-MM-dd');
      this.contact.addresses = [
        {
          street: '',
          houseNumber: null,
          zip: null,
          town: '',
          country: '',
        },
      ];
    }

    console.log(this.contactForm.get('addresses'));
  }

  get addressControls() {
    const address = this.contactForm.get('addresses') as FormArray;
    return address ? address.controls : [];
  }

  dateConversion(date: Date): string {
    let newDate = new Date(date);
    return newDate.toJSON().split('T')[0];
  }

  save(): void {
    if (!this.contactForm.valid) {
      alert('Bitte alle Felder ausfüllen!');
      return;
    }

    this.contact = this.contactForm.value;
    console.log(this.contact);
    let contactIndex = Contacts.findIndex((x) => x.id == this.contact.id);

    if (contactIndex == -1) {
      this.contact.id = Contacts.length;
      Contacts.push(this.contact);
    } else {
      Contacts[contactIndex] = this.contact;
    }
    this.router.navigate(['']);
  }

  getAddresses(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  dateChanged(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    this.contact.birthDate = new Date(val);
  }
}
