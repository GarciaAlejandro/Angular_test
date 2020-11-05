import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmpBusquedaComponent } from './componente/cmp-busqueda/cmp-busqueda.component';
import { PagenotfoundComponent } from './componente/pagenotfound/pagenotfound.component';
import { PrincipalComponent } from './componente/principal/principal.component';

const routes: Routes = [
  {path : '', component: PrincipalComponent},
  {path : 'search', component : CmpBusquedaComponent,
    data : {
      title : 'Git Search'
    }
  },
  {path : '**', component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
