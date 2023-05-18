import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactList } from './kontakt-liste.component';
import { Contact } from '../contact';

describe('KontaktListeComponent', () => {
  let component: ContactList;

  let fixture: ComponentFixture<ContactList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactList],
    });
    fixture = TestBed.createComponent(ContactList);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
