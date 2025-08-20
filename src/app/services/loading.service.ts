import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);
  loading$ = this._loading.asObservable();

  private activeRequests = 0;
  private timer?: any;

  show() {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      this.timer = setTimeout(() => {
        this._loading.next(true);
      }, 300); // Delay de 300ms
    }
  }

  hide() {
    if (this.activeRequests > 0) {
      this.activeRequests--;
    }
    if (this.activeRequests === 0) {
      clearTimeout(this.timer);
      this._loading.next(false);
    }
  }
}


