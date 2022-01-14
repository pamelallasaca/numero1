import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {
      legajo: 1,
      nombre: 'juan',
      apellido: 'perez',
      sexo: 'Masculino',
      salario: 25000,
    },
    {
      legajo: 2,
      nombre: 'lucia',
      apellido: 'mendoza',
      sexo: 'Femenino',
      salario: 25000,
    },
    {
      legajo: 3,
      nombre: 'marta',
      apellido: 'espinoza',
      sexo: 'Femenino',
      salario: 25000,
    },
    {
      legajo: 4,
      nombre: 'luis',
      apellido: 'perez',
      sexo: 'Masculino',
      salario: 25000,
    },
    {
      legajo: 5,
      nombre: 'pepe',
      apellido: 'perez',
      sexo: 'Masculino',
      salario: 25000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  radioButtonSeleccionado = 'Todos';
  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }
  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Masculino')
      .length;
  }
}
