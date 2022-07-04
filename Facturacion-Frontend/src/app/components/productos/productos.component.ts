import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Productos:any = [];
  Impuestos:any = [];
  IdEditar:any;
  
  formularioProducto = new FormGroup({
    codigo:new FormControl('', [Validators.required]),
    descripcion:new FormControl('', [Validators.required]),
    precio :new FormControl('', [Validators.required]),
    idImpuesto:new FormControl(''),
  });

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarImpuestos();
  }

  cargarProductos(){
    this.productosService.obtenerProductos().subscribe(
      res=>{
        this.Productos = res;
        console.log(this.Productos);
      },
      error=>{
        console.log(error);
      }
    );
  }

  cargarImpuestos(){
    this.productosService.obtenerImpuestos().subscribe(
      res=>{
        this.Impuestos = res;
        console.log("Impuestos");
        console.log(this.Impuestos);
      },
      error=>{
        console.log(error);
      }
    );
  }

  agregarProducto(){
    console.log(this.formularioProducto.value);
    this.productosService.nuevoProducto(this.formularioProducto.value).subscribe(
      res=>{
        console.log(res);
        this.cargarProductos();
      }
    )
  }

  editarProducto(id:any){
    this.IdEditar = id;
    console.log(id)
    this.productosService.obtenerUnProducto(id).subscribe(
      res=>{
        console.log(res);
        this.formularioProducto.setValue({
          codigo: res[0].Codigo,
          descripcion: res[0].Descripcion,
          idImpuesto: res[0].IdImpuesto._id,
          precio: res[0].Precio,
        });
      }
    )
  }

  editar(){
    this.productosService.editarProducto(this.IdEditar,this.formularioProducto.value).subscribe(
      res=>{
        console.log(res);
        this.cargarProductos();
      }
    )
  }

  eliminarProducto(id:any){

    this.productosService.eliminarProducto(id).subscribe(
      res=>{
        console.log(res);
        this.cargarProductos();
      }
    )

  }
}
