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
    this.ServicioBuscarService.busqueda('GarciaAlejandro').then((response) => {
      // alert("Total: " + response.total_count);
      // alert(response.items[0].html_url);
      let pagGithub = response.items[0].html_url;
      if (window.confirm('¿Desea ir al perfil en Github?')) {
        window.open('google.com','_blank');
      };
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
  title = 'titulo de la página';
}