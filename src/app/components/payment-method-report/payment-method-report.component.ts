import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaymentMethodReport } from './payment-method-report';
import { PaymentMethodService } from '@services/payment-method.service';
import { environment } from '@environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-ventas-medios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-method-report.component.html',
  styleUrl: './payment-method-report.component.css',
})
export class PaymentMethodComponent implements OnInit, OnDestroy {
  utilidades: Array<any> = [];
  miArray: any[][] = [];
  varPagination: any = environment.paginationVar;

  valor1: any = 1;
  valor2: any = 2;
  arrayPages: [] = [];

  ventas_medios: any;
  totalAnio: any;
  totalMes: any;
  totalDia: any;
  private destroy$ = new Subject<void>();

  constructor(
    private paymentMethodService: PaymentMethodService,
    private oauthService: OAuthService
  ) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.configureOAuth();
  }

  configureOAuth(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      const idToken = this.oauthService.getIdToken();
    });
  }

  ngOnInit() {
    this.getPaymenMethod(1, this.varPagination);
  }

  getPaymenMethod(valor1: any, valor2: any): void {
    this.paymentMethodService
      .getPaymenMethod(valor1, valor2)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.ventas_medios = response;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(); 
    this.destroy$.complete();
  }
}
