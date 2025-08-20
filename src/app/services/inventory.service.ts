import { Injectable } from '@angular/core';
import { Inventarios } from '@components/inventoryView/inventory';
import { InventoryResponse } from '@components/inventoryView/inventory-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getInventory(PNumber: number, PSize: number): Observable<Inventarios[]> {
    const headers = new HttpHeaders({
      'X-Environment': 'production-report',
    });
    const options = { headers };
    const endpoint = `${this.url}/inventory-report?PageNumber=${PNumber}&PageSize=${PSize}`;
  

    return this.http.get<Inventarios[]>(endpoint, options).pipe(
     
    );
  }

}
