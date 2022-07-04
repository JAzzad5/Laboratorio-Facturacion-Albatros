import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';
import {FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Productos:any = [];
  
  formularioProducto = new FormGroup({
    codigo:new FormControl('', [Validators.required]),
    descripcion:new FormControl('', [Validators.required]),
    precio :new FormControl('', [Validators.required]),
    idImpuesto:new FormControl('', [Validators.required]),
  });

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.productosService.obtenerProductos().subscribe(
      res=>{
        this.Productos = res;
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
