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

  obtenerUnProducto(idProducto:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/productos/${idProducto}`,{});
  }

  obtenerImpuestos():Observable<any>{
    return this.httpClient.get(`http://localhost:8888/impuestos`,{});
  }

  nuevoProducto(formularioProducto:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/productos/nuevo`,formularioProducto);
  }

  editarProducto(idProducto:any, formulario:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/productos/${idProducto}/editar`,formulario);
  }

  eliminarProducto(idProducto:any):Observable<any>{
    return this.httpClient.delete(`http://localhost:8888/productos/${idProducto}/eliminar`,{});
  };

}
