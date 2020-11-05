import { TestBed } from '@angular/core/testing';

import { SrvBusquedaService } from '../servicios/svr-buscar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {ItfBuscar} from '../interfaces/itf-buscar';      // Archivo si no tiene @
describe('SvrBuscarService', () => {
  let service: SrvBusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(SrvBusquedaService);
  });
  // OK 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Verify if cached values is an array empty', () => {
    let response = service.cachedValues;
    console.log(response);   
    expect(response).toEqual([ ]);
  });

});
