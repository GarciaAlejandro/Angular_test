import { TestBed } from '@angular/core/testing';

import { SrvBusquedaService } from '../servicios/svr-buscar.service';
// import {ItfBuscar} from '../interfaces/itf-buscar';      // Archivo si no tiene @
describe('SvrBuscarService', () => {
  let service: SrvBusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvBusquedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
