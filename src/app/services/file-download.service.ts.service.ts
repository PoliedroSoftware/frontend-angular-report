import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }

  downloadPdf() {
    const url = `${environment.url}?PageNumber=1&PageSize=10&format=pdf`;

    return this.http.get(url, {
      responseType: 'blob'
    });
  }
}
