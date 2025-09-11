import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }

  downloadPdf(pageNumber: number = 1, pageSize: number = environment.paginationVar) {
    const headers = new HttpHeaders({
      'Accept': 'application/pdf',
      'X-Environment': 'production-report'
    });
    const endpoint = `${environment.url}/inventory-report?PageNumber=${pageNumber}&PageSize=${pageSize}`;

    return this.http.get(endpoint, {
      responseType: 'blob',
      headers
    });
  }
}
