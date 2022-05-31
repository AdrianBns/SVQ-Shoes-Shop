
import {Item} from'./item.model'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';




const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class ItemListService {

  URL_BASE = 'http://localhost:3000/item-list';

  constructor(private http: HttpClient){}


  getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.URL_BASE);
  }
  getItem(id: number): Observable<Item>{
    const url = `${this.URL_BASE}/${id}`;
    return this.http.get<Item>(url);
  }


  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.URL_BASE, item, httpOptions);
  }

  updateItem (item: Item): Observable<Item>{
    const url = `${this.URL_BASE}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }

  deleteItem(id: number): Observable<{}>{
    const url = `${this.URL_BASE}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}


/* Esta clase es el Service de JAVA Spring
Para no tener problemas debido a cambios en la url que llamemos,
creamos el service aparte para cuando ocurra eso solo cambiar a dónde llama

Para que esto funcione es necesario:

Colocar el @Injectable() y hacer el import
En la app.module.ts añadir el ItemListService como providers
una vez hecho esto, pasar como variable del mismo tipo y en private
el servicio al constructor de la app, en este caso al item-list.componenent.ts


Para poder traer la info de un server, se usa el HttpClient que funciona como el fetch.
Pasamos por el constructor el httpClient y creamos el Get como método.

Llamamos mediante import al httpClient en el item-list-component.ts ...
httpCliente.getItemList().subscribe((data) => this.myItems = data)

es igual a un fetch!
*/
