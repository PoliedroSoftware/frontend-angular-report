import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }

  downloadPdf() {
    const url = '{{url}}/api/v1/inventory-report?PageNumber=1&PageSize=10&format=pdf';

    return this.http.get(url, {
      responseType: 'blob'
    });
  }
}
