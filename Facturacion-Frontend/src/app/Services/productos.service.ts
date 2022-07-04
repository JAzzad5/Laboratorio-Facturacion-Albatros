import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient:HttpClient) { }

  obtenerProductos():Observable<any>{
    return this.httpClient.get(`http://localhost:8888/productos`,{});
  }

  // nuevoProducto(idComercio:any, formularioProducto:any):Observable<any>{
  //   return this.httpClient.post(`http://localhost:8888/productos/${idComercio}/nuevo`,formularioProducto);
  // }

  // editarProducto(idProducto:any, formulario:any):Observable<any>{
  //   return this.httpClient.put(`http://localhost:8888/productos/${idProducto}/editar`,formulario);
  // }

  // eliminarProducto(idProducto:any):Observable<any>{
  //   return this.httpClient.delete(`http://localhost:8888/productos/${idProducto}/eliminar`,{});
  // };

}
