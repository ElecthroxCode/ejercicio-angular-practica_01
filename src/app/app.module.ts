import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoServicio } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectoComponentComponent } from './proyecto-component/proyecto-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './cotacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'proyecto', component:ProyectoComponentComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizarComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectoComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ServicioEmpleadosService, EmpleadoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
