import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoServicio } from '../empleados.service';

@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css']
})
export class ProyectoComponentComponent {
constructor(private router:Router,  private empleados:EmpleadoServicio){

}
  volverHome(){
    this.router.navigate(['']);
  }


  inputNombre:string="";
  inputApellido:string="";
  inputSalario:number=0;

  agregarEmpleado(){
    
    //this.miServicio.mostrarMensaje("Se va a agregar " +this.inputNombre+" " + this.inputApellido);
    this.empleados.addEmpleado(new Empleado(this.inputNombre, this.inputApellido, this.inputSalario));
    this.router.navigate(['']);
  }
 

  arrayEmpleado:Empleado[] = [];
}
