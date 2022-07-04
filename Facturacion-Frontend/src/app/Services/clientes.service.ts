import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient:HttpClient) { }

  
  obtenerClientes():Observable<any>{
    return this.httpClient.get(`http://localhost:8888/clientes`,{});
  }

  obtenerUnCliente(idCliente:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/clientes/${idCliente}`,{});
  }


  nuevoCliente(formularioCliente:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/clientes/nuevo`,formularioCliente);
  }

  editarCliente(idCliente:any, formulario:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/clientes/${idCliente}/editar`,formulario);
  }

  eliminarCliente(idCliente:any):Observable<any>{
    return this.httpClient.delete(`http://localhost:8888/clientes/${idCliente}/eliminar`,{});
  };
}
