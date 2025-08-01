import { Injectable } from '@angular/core';
import { Utility } from '@components/utility-view/utility';
import { Inventarios } from '@components/inventoryView/inventory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

      private url: string =environment.url
      constructor( private http:HttpClient) { }


   getUtility(PNumber: number, PSize: number) {
    const headers = new HttpHeaders({
      'X-Environment': 'production-report'
    });
    const options = { headers };
    const endpoint = `${this.url}/utility-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    return this.http.get<Utility[]>(endpoint, options);
  }   
  
}
