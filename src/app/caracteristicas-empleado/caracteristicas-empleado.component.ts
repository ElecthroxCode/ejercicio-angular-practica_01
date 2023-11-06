import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {

  constructor(private servicio:ServicioEmpleadosService){

  }
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregarCaracteristica(value:string){
    this.servicio.mostrarMensaje("Se va agregar la siguiente caracteristicas: "+ value+".");
    this.caracteristicasEmpleado.emit(value);
  }
  
}
