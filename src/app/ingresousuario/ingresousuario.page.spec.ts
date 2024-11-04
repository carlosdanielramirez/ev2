import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresousuarioPage } from './ingresousuario.page';

describe('IngresousuarioPage', () => {
  let component: IngresousuarioPage;
  let fixture: ComponentFixture<IngresousuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresousuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
