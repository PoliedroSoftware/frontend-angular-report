import { Injectable } from '@angular/core';
import { DraftView } from '@components/draftView/draft';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DraftService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getDraft(PNumber: number, PSize: number): Observable<any> {
    const headers = new HttpHeaders({
      'X-Environment': environment.Headers,
    });
    const options = { headers };
    const endpoint = `${this.url}/draft-report?PageNumber=${PNumber}&PageSize=${PSize}`;
    return this.http.get<DraftView[]>(endpoint, options);
  }
}
