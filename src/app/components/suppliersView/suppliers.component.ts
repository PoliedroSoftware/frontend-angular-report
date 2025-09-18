import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SuppliersService } from '@services/suppliers.service';
import { environment } from '@environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.css',
})
export class SuppliersComponent {
  proveedores: Array<any> = [];
  miArray: any[][] = [];
  varPaginacion: any = environment.paginationVar;
  valor1: any = 1;
  valor2: any = 2;
  arrayPages: [] = [];

  ventas_medios: any;
  totalAnio: any;
  totalMes: any;
  totalDia: any;

  constructor(
    private suppliersService: SuppliersService,
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
      console.log('ID Token:', idToken);
    });
  }

  ngOnInit() {
    this.getSupplierService(1, this.varPaginacion);
  }

  getSupplierService(valor1: any, valor2: any): void {
    this.proveedores = [];
    this.suppliersService.getSuppliers(valor1, valor2).subscribe((result) => {
      result.forEach((dato: any) => this.proveedores.push(dato));
    });
  }

  //Download PDF

  downloadPDF(type: 'proveedor' | 'factura'): void {
    const doc = new jsPDF();
    let columns: string[] = [];
    let rows: any[] = [];
    let dataArray: any[] = [];
    let title = '';

    switch (type) {
      case 'proveedor':
        dataArray = this.proveedores || [];
        columns = ['Proveedor', 'Saldo'];
        rows = dataArray.map((row: any) => [row.proveedor, row.saldo]);
        title = 'Reporte de Saldo Por Proveedor';
        break;

      case 'factura':
        dataArray = this.proveedores || [];
        columns = ['Fecha', 'Proveedor', 'Asesor', 'Factura', 'Saldo'];
        rows = dataArray.map((row: any) => [
          row.fecha,
          row.proveedor,
          row.asesor,
          row.factura,
          row.saldo,
        ]);
        title = 'Reporte de Saldo Por Facturas';
        break;
    }

    if (!Array.isArray(dataArray)) {
      console.error(`Error: dataArray no es un array`, dataArray);
      return;
    }

    doc.text(title, 10, 10);
    autoTable(doc, { head: [columns], body: rows, startY: 20 });
    doc.save(`${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  }
}
