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
    let pageGithub = this.ServicioBuscarService.busqueda('GarciaAlejandro').then((response) => {
      // alert("Total: " + response.total_count);
      // alert(response.items[0].html_url);
      alert("Usuario con mayor Coincidencia: "+ response.items[0].login);

      let pagGithub = response.items[0].html_url;
      if (window.confirm('¿Desea ir al perfil en Github? [habilitar ventana emergente]')) {
        window.open(pagGithub,'_blank');
      };
      return pageGithub;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
  title = 'Alejandro García Cetina';
}