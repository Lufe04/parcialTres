import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { ArteFormularioComponent } from './componentes/actividades/arte/arte-formulario/arte-formulario.component';

const appRoutes: Routes = [
  { path: 'componente-actividades', component: ActividadesComponent},
  { path: 'componente-arte', component: ArteFormularioComponent  },
 ];

@NgModule({
  declarations: [
    AppComponent,
    ActividadesComponent,
    ArteFormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
