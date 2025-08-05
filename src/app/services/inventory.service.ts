

import { Injectable } from '@angular/core';
import { Inventarios } from '@components/inventoryView/inventory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 private url: string =environment.url
  constructor( private http:HttpClient) { }
  getInventory(PNumber: number, PSize: number) {
    const headers = new HttpHeaders({
      'X-Environment': environment.Headers,
    });
    const options = { headers };
    const endpoint = `${this.url}/inventory-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    console.log(endpoint);
    return this.http.get<Inventarios[]>(endpoint, options);
  }
}

