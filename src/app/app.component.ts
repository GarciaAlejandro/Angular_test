import { Component, NgModule, OnInit } from '@angular/core';
import { SrvBusquedaService } from './servicios/svr-buscar.service';
// import { InterfaceBusqueda } from "./interfaces/interface-busqueda";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // archivo parecido a blade que se enlaza
  styleUrls: ['./app.component.css'],
})
// New
// @NgModule({
//   imports: [
//     HttpClientModule,
//   ],
// })
export class AppComponent implements OnInit {
  public response:String; //variable para imprimir en pantalla
  constructor(private ServicioBuscarService: SrvBusquedaService) {
  }

  ngOnInit() {
    //La API es de bitso un servicio que permite la compra y venta de criptomonedas, en este caso
    //consulto a su seccion de monedas, especificamente al bitcoin con cambio a pesos mexicanos.
    this.ServicioBuscarService.busqueda('btc_mxn').then((response) => {
      console.log(response)                 //imprime la respuesta en la consola
      this.response=JSON.stringify(response)//Imprime la respuesta en la pantalla
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
  title = 'titulo de la página';
}
