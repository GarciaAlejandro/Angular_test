import { Component, OnInit } from '@angular/core';
import { SrvBusquedaService } from './servicios/svr-buscar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // archivo parecido a blade que se enlaza
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ServicioBuscarService: SrvBusquedaService) {
  }

  ngOnInit() {
      this.ServicioBuscarService.busqueda('Hain').then((response) => {
        alert("Total: " + response.total_count);
      }, (error) => {
        alert("Error: " + error.statusText);
      })
  }
  title = 'titulo de la página';
}