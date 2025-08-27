import { Injectable } from '@angular/core';
import { Ventas } from '@components/salesView/sales';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Venta } from '@components/salesView/venta';
import { VentasResponse } from '@components/salesView/ventas-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VentasService {

  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getSales(PNumber: any, PSize: any): Observable<VentasResponse> {
    const headers = new HttpHeaders({
      'X-Environment': 'production-report',
    });
    const options = { headers };
    const endpoint = `${this.url}/sales-report?PageNumber=${PNumber}&PageSize=${PSize}`;

    return this.http.get<VentasResponse>(endpoint, options).pipe(
      map((response) => {
        const formatearSale = (venta: Venta): Venta => ({
          ...venta,
          saleFormatted: new Intl.NumberFormat('es-CO').format(venta.sale),
        });

        (['forDay', 'forMonth', 'forYear'] as (keyof VentasResponse)[]).forEach(
          (prop) => {
            if (Array.isArray(response[prop])) {
              response[prop] = response[prop].map(formatearSale);
            }
          }
        );

        return response;
      })
    );
  }
}
