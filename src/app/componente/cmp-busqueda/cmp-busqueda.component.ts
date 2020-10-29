import { Component, OnInit } from '@angular/core';
import { InterfaceBusqueda } from "../../interfaces/interface-busqueda";
import { SrvBusquedaService } from '../../servicios/svr-buscar.service';
@Component({
  selector: 'app-cmp-busqueda',
  templateUrl: './cmp-busqueda.component.html',
  styleUrls: ['./cmp-busqueda.component.css']
})
// "Controlador"
export class CmpBusquedaComponent implements OnInit {
  // Variable de tipo Interface
  // variable : integer
  resultadoBusqueda : InterfaceBusqueda;

  constructor(private ServicioBuscarService : SrvBusquedaService ) { }

  ngOnInit(): void {
    // this.busquedaGit("HolaMundo"); 
    this.ServicioBuscarService.busqueda('USD').then((response) => {
      // alert("Tipo de cambio dólar: $"+ response.rates["MXN"]+ " MXN al día Fecha: "+response.date);

      this.resultadoBusqueda = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  
  }
  // busquedaGit = (query: string) => { }
  busquedaGit = (query: string) => { 
    this.ServicioBuscarService.busqueda(query).then((response) => {
      // alert("Tipo de cambio dólar: $"+ response.rates["MXN"]+ " MXN al día Fecha: "+response.date);
      this.resultadoBusqueda = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
}
