import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/Services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  Clientes:any = [];
  IdEditar:any;

  formularioCliente = new FormGroup({
    nombre:new FormControl('', [Validators.required]),
    rtn:new FormControl('', [Validators.required]),
    direccion :new FormControl('', [Validators.required]),
  });

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    this.clientesService.obtenerClientes().subscribe(
      res=>{
        this.Clientes = res;
        console.log(this.Clientes);
      },
      error=>{
        console.log(error);
      }
    );
  }

  editarCliente(id:any){
    this.IdEditar = id;
    console.log(id)
    this.clientesService.obtenerUnCliente(id).subscribe(
      res=>{
        console.log(res);
        this.formularioCliente.setValue({
          nombre: res[0].Nombre,
          rtn: res[0].RTN,
          direccion: res[0].Direccion,
        });
      }
    )
  }

  eliminarCliente(id:any){
    this.clientesService.eliminarCliente(id).subscribe(
      res=>{
        console.log(res);
        this.cargarClientes();
      }
    )

  }

  editar(){
    this.clientesService.editarCliente(this.IdEditar,this.formularioCliente.value).subscribe(
      res=>{
        console.log(res);
        this.cargarClientes();
      }
    )
  }

  agregarCliente(){
    console.log(this.formularioCliente.value);
    this.clientesService.nuevoCliente(this.formularioCliente.value).subscribe(
      res=>{
        console.log(res);
        if(res.code == 11000){
          alert("RTN ya existe");
        }
        this.cargarClientes();
      }
      
    )
  }
}
