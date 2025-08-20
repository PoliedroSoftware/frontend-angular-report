import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { VentasService } from '@services/sales.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-ventas',
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent {
  utilidades: Array<any> = [];
  miArray: any[][] = [];
  valor1: any = 1;
  valor2: any = 2;
  varPaginacion: any = environment.paginationVar;
  arrayPages: [] = [];
  ventas: any;
  ventasFormato: any;
  totalAnio: any;
  totalMes: any;
  totalDia: any;

  constructor(
    private ventasService: VentasService,
    private oauthService: OAuthService
  ) {
    //this.oauthService.configure(authConfig);
    //this.oauthService.loadDiscoveryDocumentAndTryLogin();
    //this.configureOAuth();
  }

  configureOAuth(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
    const idToken = this.oauthService.getIdToken();
    });
  }

  ngOnInit() {
    this.getSaleService(1, this.varPaginacion);
  }

  getSaleService(valor1: any, valor2: any): void {
    this.ventasService.getSales(valor1, valor2).subscribe((response) => {
      this.ventas = response;
    
    });
  }
}
