import { Injectable } from '@angular/core';
import { Suppliers } from '@components/suppliersView/suppliers';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';



//import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
   constructor(private http:HttpClient) { }

   private url: string =environment.url;

     getSuppliers(PNumber: number, PSize: number): Observable<any> {
    const headers = new HttpHeaders({
      'X-Environment': 'production-report',
    });
    const options = { headers };
    const endpoint = `${this.url}/suppliers-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    return this.http.get<Suppliers[]>(endpoint, options);
  }

 
}
