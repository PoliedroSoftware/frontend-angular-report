import { Injectable } from '@angular/core';
import { Ventas } from '@components/salesView/sales';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getSales(PNumber: number, PSize: number) {
    const headers = new HttpHeaders({
      'X-Environment': environment.Headers,
    });
    const options = { headers };
    const endpoint = `${this.url}/sales-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    return this.http.get<Ventas[]>(endpoint, options);
  }
}
