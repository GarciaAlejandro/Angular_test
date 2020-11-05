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
  UserQuery : string;
  constructor(private ServicioBuscarService : SrvBusquedaService ) { }

  ngOnInit(): void {
    // this.busquedaGit("HolaMundo"); 
    this.ServicioBuscarService.busqueda('Hain').then((response) => {
      this.resultadoBusqueda = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  
  }
  // busquedaGit = (query: string) => { }
  busquedaGit = (query: string) => { 
    this.ServicioBuscarService.busqueda(query).then((response) => {
      this.resultadoBusqueda = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
}
