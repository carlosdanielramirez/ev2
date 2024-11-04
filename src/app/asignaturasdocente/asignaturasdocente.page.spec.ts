import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturasdocentePage } from './asignaturasdocente.page';

describe('AsignaturasdocentePage', () => {
  let component: AsignaturasdocentePage;
  let fixture: ComponentFixture<AsignaturasdocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturasdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
