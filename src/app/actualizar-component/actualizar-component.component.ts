import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoServicio } from '../empleados.service';
@Component({
  selector: 'app-actualizar-component',
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css']
})
export class ActualizarComponentComponent {

  constructor(private router:Router, private routeAct:ActivatedRoute, private empleados:EmpleadoServicio){
    this.arrayEmpleado= this.empleados.empleado;
    this.indice = this.routeAct.snapshot.params['id'];
    this.empleadoActualizar = this.empleados.empleadoBuscado(this.indice);
    this.inputNombre = this.empleadoActualizar.nombre;
    this.inputApellido = this.empleadoActualizar.apellido;
    this.inputSalario = this.empleadoActualizar.salario;
  }
    volverHome(){
      this.router.navigate(['']);
    }
  
    empleadoActualizar:Empleado;
    inputNombre:string="";
    inputApellido:string="";
    inputSalario:number=0;
    indice:number;
   
    updateEmpleado(){
      this.empleadoActualizar.nombre = this.inputNombre;
      this.empleadoActualizar.apellido = this.inputApellido;
      this.empleadoActualizar.salario = this.inputSalario;
      this.arrayEmpleado.splice(this.indice, 1, this.empleadoActualizar);
     
      this.router.navigate(['']);
    }
   
    deleteEmpleado(){
      if(this.empleadoActualizar.nombre == this.inputNombre &&
        this.empleadoActualizar.apellido == this.inputApellido &&
        this.empleadoActualizar.salario == this.inputSalario){
          this.arrayEmpleado.splice(this.indice, 1);
          this.router.navigate(['']);
      }else{
        alert("No se puede eliminar porque error en los datos, Si desea modificar, hagalo primero.")
      }
    }
  
    arrayEmpleado:Empleado[] = [];
     
   
}
