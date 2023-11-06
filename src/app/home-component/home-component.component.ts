import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoServicio } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'Lista de Empleados';
  arrayEmpleado:Empleado[] = [];

  constructor(private miServicio:ServicioEmpleadosService, private empleados:EmpleadoServicio){
    this.arrayEmpleado = empleados.empleado;
  }



  inputNombre:string="";
  inputApellido:string="";
  inputSalario:number=0;

  agregarEmpleado(){
    
    //this.miServicio.mostrarMensaje("Se va a agregar " +this.inputNombre+" " + this.inputApellido);
    this.empleados.addEmpleado(new Empleado(this.inputNombre, this.inputApellido, this.inputSalario));
  }
 

}
