import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { environment } from '@environments/environment';
import { Inventarios } from './inventory';
import { InventoryService } from '@services/inventory.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';
import { takeUntil } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent implements OnInit, OnDestroy {
  inventarios: any;
  myArray: any;
  valor1: any = 1;
  valor2: any = 2;
  varPagination: any = environment.paginationVar;
  arrayPages: [] = [];
  Resultados: number = 0;
  transform: any;
  private destroy$ = new Subject<void>();
  constructor(
    private inventoryService: InventoryService,
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

  ngOnInit(): void {
    this.getInventory(1, this.varPagination);
  }


  getInventory(valor1: any, valor2: any): void {
    this.inventoryService.getInventory(valor1, valor2).pipe(takeUntil(this.destroy$)).subscribe((result) => {
      console.log('Inventario recibido:', result);

      
      this.myArray = Object.values(result); //🔥 Esto convierte el objeto en un array
      // 🔹 Usando forEach
      this.myArray.forEach((inventario: Inventarios) => {
        const formatCOP = (valor: any) =>
          new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
          }).format(valor);
        console.log(
          `ID: ${inventario.name}, Nombre: ${inventario.sku}, Precio: ${inventario.sale}`
        );

        inventario.costFormatted= formatCOP(inventario.cost),
        inventario.saleFormatted= formatCOP(inventario.sale),
        inventario.subtotalCostFormatted= formatCOP(inventario.subtotal_Cost),
        inventario.subtotalSaleFormatted= formatCOP(inventario.subtotal_sale),

        console.log(this.transform);
      });
    });
  }


  

  logout(): void {
    const idToken = this.oauthService.getIdToken();
    const logoutUrl =
      this.oauthService.logoutUrl +
      '?id_token_hint=' +
      encodeURIComponent(idToken) +
      '&post_logout_redirect_uri=' +
      encodeURIComponent(window.location.origin);
    const logoutUrl1 =
      this.oauthService.issuer + '/protocol/openid-connect/logout';
    console.log(logoutUrl1);
    window.location.href = logoutUrl;
  }

  ngOnDestroy() {
  this.destroy$.next();   
  this.destroy$.complete();
}

}

