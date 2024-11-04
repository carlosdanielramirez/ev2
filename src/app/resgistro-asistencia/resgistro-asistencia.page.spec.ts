import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResgistroAsistenciaPage } from './resgistro-asistencia.page';

describe('ResgistroAsistenciaPage', () => {
  let component: ResgistroAsistenciaPage;
  let fixture: ComponentFixture<ResgistroAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistroAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
