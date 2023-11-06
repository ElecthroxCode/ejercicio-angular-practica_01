import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadoServicio{

    constructor(private empleadoVentanaEmergente:ServicioEmpleadosService){

    }

    empleado:Empleado[] = [
        new Empleado('Pedro', 'Tineo', 3400),
        new Empleado('Maria', 'Steffing', 6000),
        new Empleado('Julia', 'Fernandez', 4880)
      ];

      addEmpleado(emple:Empleado){
        this.empleadoVentanaEmergente.mostrarMensaje(
            "Nombre a agregar: " + emple.apellido + " con sueldo de " + emple.salario);
        this.empleado.push(emple);
      }

      empleadoBuscado(indice:number){
        let emple = this.empleado[indice];
        return emple;
      }

}
