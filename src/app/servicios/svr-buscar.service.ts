import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
// Cambiar el nombre se ve reflejado en la interface [interface InterfaceBusqueda]
import { InterfaceBusqueda } from "../interfaces/interface-busqueda";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { SubscribableOrPromise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvBusquedaService {
  //  Se crea una variable que cachea los resultados previos para no ejecutar el servicio
  //  Es un arreglo de interfaz (query es el índice del array) arreglo de tipo interfaz
  //  - linea original : cachedValues : Array <{ [ query : string ]: interface }> = [];

  // crear variables
  cachedValues: Array<{
    [query: string]: InterfaceBusqueda // Hacer referencia a la interface
  }> = [];
  // Constructor de la clase
  constructor(private http: HttpClient) {
    this.http = http
  }
  // Funciones
    // se crea una promesa que devuelve <InterfaceBusqueda>
    busqueda = (query: string): Promise <InterfaceBusqueda> => {
      let promise = new Promise <InterfaceBusqueda>((resolve, reject) => {
        if (this.cachedValues[query]) {
          resolve(this.cachedValues[query])
        }else{
          this.http.get('https://api.bitso.com/v3/order_book/?book='+query)
          .toPromise()
          .then( (response) => {
            this.cachedValues[query]=response
            resolve (response as InterfaceBusqueda)
          },(error) =>{
            reject(error);
          })
        }
      })
      return promise;
    }
}
