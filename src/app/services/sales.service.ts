import { Injectable } from '@angular/core';
import { Ventas } from '@components/salesView/sales';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  //inventarioUrl='https://gr09yevej5.execute-api.us-east-2.amazonaws.com/report/api/v1/inventory-report';
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getSales(PNumber: number, PSize: number) {
    const headers = new HttpHeaders({
      'X-Environment': 'production-report',
    });
    const options = { headers };
    const endpoint = `${this.url}/sales-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    return this.http.get<Ventas[]>(endpoint, options);
  }
}
