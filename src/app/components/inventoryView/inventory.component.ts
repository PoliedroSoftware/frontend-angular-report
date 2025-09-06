import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { environment } from '@environments/environment';
import { Inventarios } from './inventory';
import { InventoryService } from '@services/inventory.service';
import { FileDownloadService } from '@services/file-download.service.ts.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';
import { takeUntil } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { error } from 'jquery';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
  arrayPages: number[] = [];
  Resultados: number = 0;
  transform: any;

  // Propiedades de paginación
  currentPage: number = 1;
  totalPages: number = 1;
  totalRecords: number = 0;
  pageSize: number = environment.paginationVar;

  // Hacer Math disponible en el template
  Math = Math;

  private destroy$ = new Subject<void>();
  constructor(
    private inventoryService: InventoryService,
    private FileDownloadService: FileDownloadService,
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

  getInventory(pageNumber: number, pageSize: number): void {
    this.inventoryService
      .getInventory(pageNumber, pageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log('Inventario recibido:', response);

        // Extraer los datos y la información de paginación
        this.myArray = response.data || [];
        this.currentPage = pageNumber;
        this.totalPages = response.totalPages || 1;
        this.totalRecords = response.totalRows || 0;
        this.pageSize = pageSize;

        // Generar array de páginas para la paginación
        this.generatePageNumbers();

        // 🔹 Formatear los valores monetarios
        this.myArray.forEach((inventario: Inventarios) => {
          const formatCOP = (valor: number) =>
            new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0,
            }).format(valor);

          inventario.costFormatted = formatCOP(inventario.cost);
          inventario.saleFormatted = formatCOP(inventario.sale);
          inventario.subtotalCostFormatted = formatCOP(
            inventario.subtotal_Cost
          );
          inventario.subtotalSaleFormatted = formatCOP(
            inventario.subtotal_sale
          );
        });

        console.log('Datos procesados:', {
          currentPage: this.currentPage,
          totalPages: this.totalPages,
          totalRecords: this.totalRecords,
          data: this.myArray,
        });
      });
  }

  // Generar números de página para mostrar en la paginación
  generatePageNumbers(): void {
    this.arrayPages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(maxPagesToShow / 2)
    );
    let endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);

    // Ajustar si estamos cerca del final
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      this.arrayPages.push(i);
    }
  }

  // Métodos de navegación
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.getInventory(page, this.pageSize);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToFirstPage(): void {
    this.goToPage(1);
  }

  goToLastPage(): void {
    this.goToPage(this.totalPages);
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

  // Descargar PDF

  downloadPDF(): void {
    this.FileDownloadService.downloadPdf().subscribe(
      (blob: Blob) => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = 'inventario.pdf';
        a.click();

        URL.revokeObjectURL(objectUrl);
      },
      (error: any) => {
        console.error('Error al descargar el PDF:', error);
      }
    );
  }
}
