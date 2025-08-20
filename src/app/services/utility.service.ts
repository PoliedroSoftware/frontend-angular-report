import { Injectable } from '@angular/core';
import { Inventarios } from '@components/inventoryView/inventory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Utility } from '@components/utility-view/utility';
import { UtilityResponse } from '@components/utility-view/utility-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

      private url: string =environment.url
      constructor( private http:HttpClient) { }

   
   getUtilit(PNumber: number, PSize: number) {
    const headers = new HttpHeaders({
      'X-Environment': 'production-report'
    });
    const options = { headers };
    const endpoint = `${this.url}/utility-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    console.log(endpoint);
    return this.http.get<Utility[]>(endpoint, options);
  }  

   getUtility(PNumber: any, PSize: any): Observable<UtilityResponse> {

     const headers = new HttpHeaders({
      'X-Environment': 'production-report'
    });
    const options = { headers };
    const endpoint = `${this.url}/utility-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    return this.http.get<UtilityResponse>(endpoint, options).pipe(
      map((response) => {

        const formatearSale = (utility: Utility): Utility => ({
          ...utility,
            utilityFormatted: new Intl.NumberFormat('es-CO').format(utility.utility)
        });

        (['forDay', 'forMonth', 'forYear'] as (keyof UtilityResponse)[]).forEach(prop => {
          if (Array.isArray(response[prop])) {
            response[prop] = response[prop].map(formatearSale);
          }
        });

        return response;
      })
    );
  }
  
}
