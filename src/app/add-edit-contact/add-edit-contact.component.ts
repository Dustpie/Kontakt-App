import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Contacts } from '../mock-contacts';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { ContactService } from '../contactService';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss'],
})
export class AddEditContactComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  contact: Contact = {
    id: 0,
    name: 'Dennis',
    birthDate: new Date('2023-08-23'),
    addresses: [],
    isOrganization: false,
  };

  contacts: Contact[] = [];

  contactForm: FormGroup = this.formbuilder.group({
    id: null,
    name: [
      null,
      Validators.compose([Validators.required, Validators.minLength(2)]),
    ],
    birthDate: [null, Validators.required],

    addresses: this.formbuilder.array([]),
  });

  get addressArray(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  createAddressFormGroup(): FormGroup {
    return this.formbuilder.group({
      street: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      houseNumber: [null, Validators.required],
      zip: [
        null,
        Validators.compose([
          null,
          Validators.minLength(4),
          Validators.required,
        ]),
      ],
      town: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      country: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }

  castAsFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
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
          zip: [address.zip, Validators.required],
          town: [address.town, [Validators.required, Validators.minLength(3)]],
          country: [
            address.country,
            [Validators.required, Validators.minLength(4)],
          ],
        });
      });

      this.contactForm.setValue({
        id: this.contact.id,
        name: this.contact.name,
        birthDate: this.dateConversion(this.contact.birthDate),
        addresses: addressArray,
      });
    } else {
      this.contact.id = this.contacts ? this.contacts.length : 0;
      this.contact.name = '';
      this.contact.birthDate = new Date('yyyy-MM-dd');
    }

    console.log(this.contactForm.get('addresses'));
  }
  // Controls
  get addressControls() {
    return (this.contactForm.get('addresses') as FormArray).controls;
  }

  dateConversion(date: Date): string {
    let newDate = new Date(date);
    return newDate.toJSON().split('T')[0];
  }

  save(): void {
    if (!this.contactForm.valid && this.contactForm.dirty) {
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
    this.contactService.addContacts(this.contact);
    this.router.navigate(['']);
  }

  dateChanged(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    this.contact.birthDate = new Date(val);
  }

  addAddress(event: Event): void {
    event.preventDefault();
    (this.contactForm.get('addresses') as FormArray).push(
      this.createAddressFormGroup()
    );
  }

  deleteAddress(event: Event): void {
    event.preventDefault();
    let lastItem = this.addressArray.length - 1;
    if (lastItem >= 0) {
      this.addressArray.removeAt(lastItem);
    }
  }
}
