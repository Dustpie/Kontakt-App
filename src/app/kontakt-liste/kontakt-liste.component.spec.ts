import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktListeComponent } from './kontakt-liste.component';

describe('KontaktListeComponent', () => {
  let component: KontaktListeComponent;
  let fixture: ComponentFixture<KontaktListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KontaktListeComponent]
    });
    fixture = TestBed.createComponent(KontaktListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
