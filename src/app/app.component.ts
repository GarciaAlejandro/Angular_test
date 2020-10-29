import { Component, NgModule, OnInit } from '@angular/core';
import { SrvBusquedaService } from './servicios/svr-buscar.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // archivo parecido a blade que se enlaza
  styleUrls: ['./app.component.css'],
})
// New
@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class AppComponent implements OnInit {

  constructor(private ServicioBuscarService: SrvBusquedaService) {
  }

  ngOnInit() {
    this.ServicioBuscarService.busqueda('USD').then((response) => {
      //  En la respuesta devuelve distintas monedas al cambio de petición (USD)
      // Entre ellas está la moneda MXN por lo que se imprime 
      // 1 dólar = 21.00 MXN al día 19-OCT-20
      alert("Tipo de cambio dólar: $"+ response.rates["MXN"]+ " MXN al día Fecha: "+response.date);
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
  title = 'angular-base01';
}