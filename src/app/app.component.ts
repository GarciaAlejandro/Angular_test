import { Component, NgModule, OnInit } from '@angular/core';
import { SrvBusquedaService } from './servicios/svr-buscar.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // archivo parecido a blade que se enlaza
  styleUrls: ['./app.component.css'],
})
// New
// @NgModule({
//   imports: [
//     HttpClientModule
//   ],
// })
export class AppComponent implements OnInit {

  constructor(private ServicioBuscarService: SrvBusquedaService) {
  }

  ngOnInit(): void {
  } 
  title = 'angular-base01';
}