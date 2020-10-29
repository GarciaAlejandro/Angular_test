import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpBusquedaComponent } from './cmp-busqueda.component';

describe('CmpBusquedaComponent', () => {
  let component: CmpBusquedaComponent;
  let fixture: ComponentFixture<CmpBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
