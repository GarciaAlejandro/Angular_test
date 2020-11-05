import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { SrvBusquedaService } from './servicios/svr-buscar.service';
import { CmpBusquedaComponent } from './componente/cmp-busqueda/cmp-busqueda.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrincipalComponent } from './componente/principal/principal.component';
import { PagenotfoundComponent } from './componente/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    CmpBusquedaComponent,
    PrincipalComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SrvBusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
