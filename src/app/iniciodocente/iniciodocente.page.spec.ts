import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciodocentePage } from './iniciodocente.page';

describe('IniciodocentePage', () => {
  let component: IniciodocentePage;
  let fixture: ComponentFixture<IniciodocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciodocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
